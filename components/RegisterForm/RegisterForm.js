import React, {forwardRef, useEffect, useRef, useState} from "react";
import logo from '../../src/assets/Images/logo.png'
import {
    Container,
    Flex,
    Button,
    Box,
    Text,
    Image,
    Label,
    Grid,
    Input,
    Select,
    Checkbox,
    useThemeUI,
    Spinner
} from 'theme-ui';
import Style from './Style'
import MuiComponent from "../MuiComponent";
import rr from '../../src/assets/Images/rr.jpg'
import {Modules, Periods, Relations, SexArray, StepsInputs, StepsValidator, UserTypes} from "./RegistreFormData";
import {
    BsFillPersonLinesFill,
    BsFillPeopleFill,
    BsBookmarkCheckFill,
    BsHouseDoorFill,
    BsNewspaper,
    BsFillPersonFill,
    BsCalendarDate,
    BsTextCenter,
    BsCodeSquare,
    BsCpu,
    BsCloudLightningRain, BsFillBadgeArFill, BsLightningCharge, BsHeart, BsGenderAmbiguous
} from "react-icons/bs";
import {
    AiFillCloseCircle,

    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineMail,
    AiOutlineMinus, AiOutlinePhone
} from "react-icons/ai";
import Logo from "../Logo/Logo";
import DoneMark from "../DoneMark";
import {useDispatch} from "react-redux";
import {HideBackDrop, PushNotification} from "../../src/Apis/Redux/Actions/Types";
import _Student from "../../src/Models/_Student";
import _Parent from "../../src/Models/_Parent";
import MultiStatesComponent from "../MultiStatesComponent/MultiStatesComponent";
import YitInput from "../YitInput";
import SelectButton from "../SelectButton";
import ModuleTag from "../ModuleTag";





const NEXT = "التالي"
const SAVE = "تسجيل"
const MainStyle = Style.Main
const RegisterForm = () => {
    let dispatch = useDispatch()
    const StepsNames = ['NewUnknownForm', 'NewStudentForm', 'ModulesForm', 'NewParentForm']
    const [currentStep, setCurrentStep] = useState(0);
    const [working, setWorking] = useState(false);
    const [currentState, setCurrentState] = useState(1);
    const [previousStep, setPreviousStep] = useState(0);
    const [period, setPeriod] = useState(-1);
    const [level, setLevel] = useState(0);
    const [type, setType] = useState(-1);
    const [newInfo, setNewInfo] = useState({
        type: -1, parentRelation: -1, period: -1, level: 0, selectedModules: [], sex: -1,
    });
    const NextButton = React.createRef();
    const ref = useRef(null);


    const onChange = (e)=>{
        newInfo[e.target.name] = e.target.value
        setTimeout(()=>{
            setNewInfo(newInfo)
        }, 100)

    }

    const ModulesForm = ({}) => {

        const modules = Periods[period]['levels'].filter(({id}) =>{return id == level})[0]['modules']
        const [selectedModules, setSelectedModules] = useState(Array(modules.length).fill(false));
        const [render, setRender] = useState(false);
        useEffect(() => {

            return () => {

            };
        }, [newInfo, selectedModules]);

        return (
            <Box sx={{
                display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap",
                fontSize: 40,
            }}>
                { modules.map((name, index) => (
                    <ModuleTag
                        onClick={()=>{
                            selectedModules[index] = !selectedModules[index]
                            setSelectedModules(selectedModules)
                            newInfo.selectedModules = selectedModules
                            setRender(!render)
                        }}
                        selected={selectedModules[index]}
                        id={0}
                        Icon={Modules[name]['icon']} text={Modules[name]['name']}></ModuleTag>
                ))}
            </Box>
        )
    }

    const NewUnknownForm = ({}) => {

        return (
            <>
                <ul>
                    <li><Text as={'h2'} sx={{fontSize: [6]}}>تلتزم مدرسة المناهل يالحفاط على سرية المعلومات و عدم مشاركتها</Text></li>
                    <li><Text as={'h2'} sx={{fontSize: [6]}}>يتم نسجيل معلومات و عنوان الجهاظ المستخدم لملأ منودج التسجيل</Text></li>
                    <li><Text as={'h2'} sx={{fontSize: [6]}}>ادا واجهتم صعوبة في التسجبل، يرجي الاتصال بتا و سيقوم أخد الأعوان يالتسجيل بدلا عنكم</Text></li>
                </ul>
                <br/>
                <Grid sx={{
                    gap: '50px 20px',
                    gridTemplateColumns: ['100%', '100%'],
                }}>
                    <Box sx={{display: 'flex', fontSize: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                        <SelectButton
                            onClick={()=>{
                              setType(UserTypes.Student)
                                newInfo.type = UserTypes.Student
                            }}
                            selectedValue={type}
                            id={UserTypes.Student}
                            Icon={BsFillPersonLinesFill} text={'تلميد'}></SelectButton>
                        <SelectButton

                            onClick={()=>{
                                setType(UserTypes.Parent)
                                newInfo.type = UserTypes.Parent
                            }}
                            selectedValue={type}
                            id={UserTypes.Parent}
                            Icon={BsFillPeopleFill} text={'ولي أمر'}></SelectButton>
                    </Box>
                </Grid>
            </>

        )
    }

    const NewStudentForm = ({fullName}) => {
        useEffect(() => {

            return () => {

            };
        }, [newInfo, ]);
        return (

                <Box as={'form'}>
                    <Grid sx={{}} className={'line line3-7'}>
                        <YitInput
                            Icon={BsFillPersonFill}
                            placeholder={'الاسم واللقب'}
                            ref={{
                                ref1 : StepsInputs.NewStudentForm.name.ref,
                                ref2: StepsInputs.NewStudentForm.name.inputRef
                            }}
                            onChange={onChange} name={'studentName'}
                            defaultValue={newInfo.studentName}
                            errorMsg={'يجب أن تدخل اسمك الحقيقي'}
                        />

                        <YitInput
                            Component={Select}
                            Icon={BsGenderAmbiguous}
                            ref={{
                                ref1 : StepsInputs.NewStudentForm.sex.ref,
                                ref2: StepsInputs.NewStudentForm.sex.inputRef
                            }}
                            onChange={onChange}  name={'sex'}
                            arrow={<Box></Box>}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            errorMsg={'اختر الجنس'}
                            defaultValue={newInfo.sex}>
                            <option value={-1}>{'اختر من فضلك'}</option>
                            {
                                SexArray.map((item, index) =>{
                                    return <option value={item.Id}>{item.label}</option>
                                })
                            }
                        </YitInput>
                    </Grid>
                    <Grid sx={{}} as="form" className={'line'}>
                        <YitInput
                            Icon={BsCalendarDate}
                            ref={{
                                ref1 : StepsInputs.NewStudentForm.birthDate.ref,
                                ref2: StepsInputs.NewStudentForm.birthDate.inputRef
                            }}
                            onChange={(e)=>{
                                newInfo.birthDate = e.target.value
                                setNewInfo(newInfo)
                            }}
                            defaultValue={newInfo.birthDate}
                            type={"date"}
                            errorMsg={'اختر تاريخ الميلاد'}
                        />
                        <YitInput
                            Icon={AiOutlinePhone}
                            placeholder={'رقم الهاتف'}
                            ref={{
                                ref1 : StepsInputs.NewStudentForm.phone.ref,
                                ref2: StepsInputs.NewStudentForm.phone.inputRef
                            }}
                            defaultValue={newInfo.phone}
                            onChange={onChange} name={'phone'}
                            // type={"tel"} defaultValue={newInfo.phone}
                            errorMsg={'ادخل رقم هاتف من 10 أرقام'}
                        />

                    </Grid>
                    <br/>
                    <Box sx={{display: 'flex', fontSize: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <SelectButton
                            onClick={()=>{
                                setPeriod(0)
                                newInfo.period = 0
                            }}
                            selectedValue={period}
                            id={0}
                            Icon={BsHouseDoorFill} text={'ابتدائئ'}></SelectButton>
                        <SelectButton

                            onClick={()=>{
                                setPeriod(1)
                                newInfo.period = 1
                            }}
                            selectedValue={period}
                            id={1}
                            Icon={BsNewspaper} text={'متوسط'}></SelectButton>
                        <SelectButton
                            onClick={()=>{
                                setPeriod(2)
                                newInfo.period = 2
                            }}
                            selectedValue={period}
                            id={2}
                            Icon={BsFillPeopleFill} text={'ثانوي'}></SelectButton>
                    </Box>
                    <br/>
                    <Box>
                        <YitInput
                            Component={Select}
                            Icon={BsTextCenter}
                            ref={{
                                ref1 : StepsInputs.NewStudentForm.currentLevel.ref,
                                ref2: StepsInputs.NewStudentForm.currentLevel.inputRef
                            }}
                            onChange={(e)=>{
                                setLevel(e.target.value)
                                newInfo.level = e.target.value
                            }} name={'level'}
                            arrow={<Box></Box>}
                            errorMsg={'اخترالمستوى الدراسي'}
                            defaultValue={newInfo.level}>
                            <option value={-1}>{'اختر من فضلك'}</option>
                            {
                                period !== -1 &&
                                Periods[period]['levels'].map((item, index) =>{
                                    return <option value={item.id}>{item.name}</option>
                                })
                            }
                        </YitInput>
                    </Box>
                </Box>


        )
    }

    const NewParentForm = ({}) => {
        return (
            <>
                <Label>معلومات ولي الأمر</Label>
                <Grid sx={{}} className={'line line3-7'}>
                    <YitInput
                        Icon={BsFillPersonFill}
                        placeholder={'الاسم واللقب'}
                        ref={{
                            ref1 : StepsInputs.NewParentForm.name.ref,
                            ref2: StepsInputs.NewStudentForm.name.inputRef
                        }}
                        onChange={onChange} name={'parentFullName'}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                    />

                    <YitInput
                        ref={{
                            ref1 : StepsInputs.NewParentForm.sex.ref,
                            ref2: StepsInputs.NewStudentForm.sex.inputRef
                        }}
                        Component={Select}
                        Icon={BsGenderAmbiguous}
                        onChange={onChange}  name={'parentSex'}
                        arrow={<Box></Box>}
                        defaultValue={newInfo.parentSex}>
                        <option value={-1}>{'اختر من فضلك'}</option>
                        {
                            SexArray.map((item, index) =>{
                                return <option value={item.Id}>{item.label}</option>
                            })
                        }
                    </YitInput>
                </Grid>
                <Grid className={'line line1'} as="form">

                    <YitInput
                        Component={Select}
                        Icon={BsFillPersonFill}
                        ref={{
                            ref1 : StepsInputs.NewParentForm.fullName.ref,
                            ref2: StepsInputs.NewStudentForm.fullName.inputRef
                        }}
                        onChange={onChange} name={'parentRelation'}
                        arrow={<Box></Box>}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                        defaultValue={newInfo.parentRelation}>
                        <option value={-1}>اختر من فضلك</option>
                        {
                            Relations.map(itemn =>{
                                return <option value={itemn.value}>{itemn.label}</option>
                            })
                        }
                    </YitInput>

                    <YitInput
                        Icon={AiOutlinePhone}
                        placeholder={'رقم الهاتف'}
                        ref={{
                            ref1 : StepsInputs.NewParentForm.fullName.ref,
                            ref2: StepsInputs.NewStudentForm.fullName.inputRef
                        }}
                        onChange={onChange} name={'parentPhone'}
                        type={"number"} defaultValue={newInfo.parentPhone}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                    />
                    <YitInput
                        Icon={AiOutlineMail}
                        placeholder={'البريد الإكتروني'}
                        ref={{
                            ref1 : StepsInputs.NewParentForm.mail.ref,
                            ref2: StepsInputs.NewStudentForm.mail.inputRef
                        }}
                        onChange={onChange} name={'parentMail'}
                        defaultValue={newInfo.parentMail}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                    />
                </Grid>
            </>
        )
    }

    const ConclusionStep = ({fullName}) => {

        const dispatch = useDispatch()
        const [state, setState] = useState(0);

        let StudentInfo = {
            name : newInfo.studentName,
            phone : newInfo.phone,
            birthDate: newInfo.birthDate,
            sex: newInfo.sex,
        }

        const  ParentInfo = {
            name : newInfo.parentFullName,
            phone : newInfo.parentPhone,
            sex: newInfo.parentSex,
        }

        useEffect(() => {
             _Parent.create(ParentInfo).then(r=>{
                if(r.finalResult === true){
                    console.log(r)
                    StudentInfo.parentId = r.result.id
                    StudentInfo.parentRelation = newInfo.parentRelation
                    _Student.create(StudentInfo).then(r=>{
                        if(r.finalResult === true){
                            setState(1)
                            setTimeout(()=>{
                                dispatch({type: HideBackDrop})
                            }, 1500)
                        }
                        else{
                            setState(2)
                        }
                        console.log(r)
                    }).catch(e=>{
                        setState(2)
                        console.log(e)
                    })
                }
                else{
                    setState(2)
                }
             }).catch(e=>{
                setState(2)
                console.log(e)
            })
        }, []);
        switch(state){
            case 0:
                return (

                    <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center',  height: '100%', mt: '120px'}}>
                        <Spinner size={150}/>
                    </Box>

                )
                break;
            case 1:
                return (

                    <Box sx={{
                        display: "flex", flexDirection: 'column',
                        color: 'primary', backgroundColor: '',
                         alignItems: 'center', justifyContent: 'center',  height: '100%', mt: '120px'}}>
                        <Box sx={{
                                display: "flex",
                                color: 'primary',
                                alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            <DoneMark></DoneMark>
                            <Text sx={{textAlign: "right", mr: '30px'}} as={'h2'}>تم تسجيل طلبكم بنجاح، سيتصل بكم أحد الأعوان لتأكيد تسجيلكم</Text>
                        </Box>


                    </Box>

                )
                break;
            case 2:
                return (

                    <Box sx={{
                        display: "flex", flexDirection: 'column',
                        color: 'primary', backgroundColor: '',
                        alignItems: 'center', justifyContent: 'center',  height: '100%', mt: '120px'}}>
                        <Box sx={{
                            display: "flex",
                            color: 'primary',
                            alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            <AiFillCloseCircle size={80}></AiFillCloseCircle>
                            <Text sx={{textAlign: "right", mr: '30px'}} as={'h2'}>
                                حدت خطأ أثناء التسحيل، الرجاء التأكد من اعدادات الأنترنت بجاهزك
                            </Text>
                        </Box>
                        <Text sx={{textAlign: "right", mr: '30px'}} as={'h2'}>
                            أطا كنت تواجه صعوبة في التسجيل يرجى الاتصال بالرقم 0550750576
                        </Text>
                    </Box>
                )
                break;
        }
    }

    const ValidateStep = (currentStep) => {
        let valid = true
        let i=0
        for (let Input in StepsInputs[StepsNames[currentStep]]) {
            const {ref, inputRef,  validator} = (StepsInputs[StepsNames[currentStep]][Input])
            let inputSelector = inputRef.current
            let errorTextSelector = ref.current
            if (!validator(inputSelector.value)){
                // errorSelector.style.display = 'flex'
                valid = false
                inputSelector.classList.add('BadEntry')
                errorTextSelector.style.display = 'flex'
                setTimeout(() => {
                    inputSelector.classList.remove('BadEntry')
                }, 1500)
                setTimeout(() => {
                    errorTextSelector.style.display = 'none'
                }, 1500)
            }
            i++
        }
        return valid
    }

    const SubmitStep = async (currentStep) => {
        alert(222222)
        const {onSubmit, MultiStates} = StepsValidator[StepsNames[currentStep]]
        let data  = {}
        switch (currentStep){
            case 0:

                break;
            case 1:
                data = {
                    name : newInfo.studentName,
                    phone : newInfo.phone,
                    birthDate: newInfo.birthDate,
                    sex: newInfo.sex,
                    currentLevel: newInfo.level,
                }
                alert(JSON.stringify(data))

                break;
        }


        let res = await onSubmit(data)


        if(res.finalResult){
            return  true
        }
        res.error.errors.forEach(error =>{
            let path = error.path
            let message = error.message
            if(path === 'global'){
                dispatch({type: PushNotification, payLoad: {text: message, variant: "error", duration: 4000, id: Math.random()}})
            }else {
                const {ref, inputRef,  validator, nested} = (StepsInputs[StepsNames[currentStep]][path])
                let errorTextSelector = ref.current
                let inputSelector = inputRef.current
                inputSelector.classList.add('BadEntry')
                errorTextSelector.style.display = 'flex'
                errorTextSelector.innerHTML = message
                setTimeout(()=>{
                    inputSelector.classList.remove('BadEntry')
                    errorTextSelector.style.display = 'none'
                }, 1500)
            }
        })
        return false
    }

    const ChangeStep = ()=>{
        switch (currentStep) {
            case 0:
                if (newInfo.type == UserTypes.Student) {
                    newInfo.studentName = newInfo.preFullName
                    setCurrentStep(1)
                    setPreviousStep(0)
                }
                if (newInfo.type == UserTypes.Parent) {
                    newInfo.parentFullName = newInfo.preFullName
                    setCurrentStep(4)
                    setPreviousStep(0)
                }
                break;
            case 1:
                setPreviousStep(1)
                setCurrentStep(2)
                break;

            case 2:
                if (newInfo.type == UserTypes.Student) {
                    setCurrentStep(3)
                    setPreviousStep(2)
                }
                if (newInfo.type == UserTypes.Parent) {
                    setCurrentStep(4)
                    setCurrentStep(2)
                }
                break;
        }
    }
    const HandleNext = async (currentStep) => {
        ref.current.setWorking(true)
        let valid =  ValidateStep(currentStep)
        if (valid) {
            SubmitStep(currentStep)
                .then(res =>{
                    if(res){
                        ChangeStep()
                    }else {

                        setCurrentState(1)
                    }
                    ref.current.setWorking(false)

                })
                .catch(()=>{
                    ref.current.setWorking(false)
                })
        }else {
            ref.current.setWorking(false)
        }
    }

    const DrawSteps = (currentStep) =>{
        switch(currentStep){
            case 0:
                // alert('drawing step 0')
                return <NewUnknownForm></NewUnknownForm>; break
            case 1:
                // alert('drawing step 1')
                return <NewStudentForm fullName={newInfo.studentName}></NewStudentForm>; break;
            case 2:
                return <ModulesForm fullName={newInfo.studentName}></ModulesForm>; break;
            case 3:
                // alert('drawing step 2')
                return <NewParentForm></NewParentForm>; break
            case 4:
                // alert('drawing step 2')
                return <ConclusionStep></ConclusionStep>; break
        }
    }

    useEffect(() => {

    }, [currentStep]);

    return (
        <Container sx={{mt: '15vh'}}>
            <Box sx={MainStyle.Container} id={'Container'}>
                <Box sx={MainStyle.Content}>
                    <Box sx={MainStyle.imageConn}>
                        <Box className={'backdrop FRCC'}>
                            <Image src={logo} sx={{height: '100%', width: '100%'}}></Image>
                        </Box>
                        <Image src={rr} sx={{height: '100%', width: '100%'}}></Image>
                    </Box>
                    <MultiStatesComponent state={currentState} ref={ref} working={working} sx={MainStyle.textConn}>
                        <Box  sx={MainStyle.textConn} id={'ContentBox'}>
                            <Box id={'formsBox'}>
                                    {
                                        DrawSteps(currentStep)
                                    }
                            </Box>
                            <br/>
                            { <Box id={'actionsBox'} sx={{}}>
                                    {currentStep !== 0 &&     <Button
                                            type={"button"} onClick={()=>{
                                            setPreviousStep(currentStep)
                                            setCurrentStep(previousStep)

                                        }}>
                                            <AiOutlineDoubleRight></AiOutlineDoubleRight>
                                            السابق

                                        </Button>
                                    }
                                    <Button
                                        ref={NextButton} type={"button"}  onClick={()=>{HandleNext(currentStep)}}>

                                        {NEXT}
                                        <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
                                    </Button>
                                    {
                                        currentStep == 10 &&
                                        <Button
                                            ref={NextButton} type={"button"}   onClick={()=>{HandleNext(currentStep)}}>
                                            {SAVE}
                                        </Button>
                                    }
                                 <Button
                                    ref={NextButton} type={"button"}   onClick={()=>{
                                    setCurrentStepp(1)
                                    console.log(ref.current)
                                     ref.current.childFunction1()

                                 }}>
                                    Test
                                </Button>
                            </Box>}
                        </Box>
                    </MultiStatesComponent>
                </Box>
            </Box>
        </Container>
    )
}

export default RegisterForm

