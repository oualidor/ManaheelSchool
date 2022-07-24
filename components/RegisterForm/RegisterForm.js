import React, {useEffect, useState} from "react";
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
import {Periods, Relations, StepsInputs} from "./StepsInputs";
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
    BsCloudLightningRain, BsFillBadgeArFill , BsLightningCharge, BsHeart
} from "react-icons/bs";
import {

    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineMail,
    AiOutlineMinus, AiOutlinePhone
} from "react-icons/ai";
import Logo from "../Logo/Logo";
import DoneMark from "../DoneMark";
import {useDispatch} from "react-redux";
import {HideBackDrop} from "../../src/Apis/Redux/Actions/Types";





const Modules = [
    {
        name: 'الرياضيات',
        icon: BsCodeSquare,
    },
    {
        name: 'الفيزياء',
        icon: BsCpu,
    },
    {
        name: 'العلوم الطبيعية',
        icon: BsCloudLightningRain,
    },
    {
        name: 'العربية',
        icon: BsFillBadgeArFill,
    },
    {
        name: 'الانجليزية',
        icon: BsHeart,
    },
    {
        name: 'الفرنسية',
        icon: BsHeart   ,
    },
    {
        name: 'اجتماعيات',
        icon: BsCodeSquare,
    },
    {
        name: 'هندسة مدنية',
        icon: BsCodeSquare,
    },
    {
        name: 'هندسة كهريائية',
        icon: BsLightningCharge,
    },
];
const UserTypes = {
    Student: 0,
    Parent : 1
}

const NEXT = "التالي"
const SAVE = "تسجيل"
function getAge(dateString) {
    var today = new Date();
    var age = today.getFullYear() - dateString.getFullYear();
    var m = today.getMonth() - dateString.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateString.getDate())) {
        age--;
    }
    return age;
}
const MainStyle = Style.Main
const RegisterForm = () => {
    const context = useThemeUI()
    const { theme, components, colorMode, setColorMode } = context
    const [personName, setPersonName] = React.useState([]);
    const StepsNames = ['NewUnknownForm', 'NewStudentForm', 'ModulesForm', 'NewParentForm']
    const [currentStep, setCurrentStep] = useState(0);
    const [previousStep, setPreviousStep] = useState(0);
    const [period, setPeriod] = useState(-1);
    const [level, setLevel] = useState(0);
    const [type, setType] = useState(-1);
    const [checked, setChecked] = useState(false);
    const [newInfo, setNewInfo] = useState({
        type: -1, birthDate: new Date(), parentRelation: -1, period: -1, level: 0, selectedModules: [],
    });
    // Array(Periods[period]['levels'][level]['modules'].length).fill(false)


    const NextButton = React.createRef();

    const onChange = (e)=>{
        newInfo[e.target.name] = e.target.value
        setTimeout(()=>{
            setNewInfo(newInfo)
        }, 100)

    }
    const InfoTag = ({title, value}) => {
        useEffect(() => {

            return () => {

            };
        }, []);

        return (
            <Flex sx={{alignItems: "center"}}>
                <Text variant={'title'} sx={{mx:1, fontSize: 6, color: 'primary'}}>{title}:</Text>
                <Text variant={'title'}>{value}</Text>
            </Flex>
        )
    }

    const SelectButton = ({Icon, text, id,  selectedValue, ...props }) => {

        return(

            <Box {...props} sx={{display: 'flex', justifyContent: "center", alignItems: "center",
                cursor: "pointer",
                fontSize: [20, 30], width: "30%", borderRadius: 20,
                flexDirection: "column", p: 3,
                color: id == selectedValue ? 'white': 'primary',
                backgroundColor: id == selectedValue ? 'primary': 'white',
                border: '1px solid', borderColor: 'primary'}}>
                <Icon size={35}></Icon>
                <Text>{text}</Text>
            </Box>


        )
    }

    const YitInput = ({Component, Icon,  ...props }) => {

        return(

            <Box sx={{position: "relative"}}>
                <Box

                    sx={
                    {
                        p: 2,
                        display: "flex", flexDirection: 'column', justifyContent: 'center',
                        color: 'white',
                        position: "absolute", top: '0', right: '0%', backgroundColor: 'primary', height: '100%',
                        borderTopRightRadius: 15, borderBottomRightRadius: 15,}}
                >
                    <Icon size={30}></Icon>
                </Box>

                { Component == undefined ? <Input {...props}></Input>: <Component {...props}></Component>}
            </Box>


        )
    }


    const NewUnknownForm = ({}) => {

        return (
            <>
                <ul>
                    <li>
                        <Text as={'h2'} sx={{fontSize: [6]}}>تلتزم مدرسة المناهل يالحفاط على سرية المعلومات و عدم مشاركتها</Text></li>
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
    const NewParentForm = ({}) => {
        return (
            <>
                <Label>معلومات ولي الأمر</Label>
                <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '100%'],}} as="form">
                    <YitInput
                        Icon={BsFillPersonFill}
                        placeholder={'الاسم واللقب'}
                        ref={StepsInputs.NewParentForm.fullName.ref}
                        onChange={onChange} name={'parentFullName'}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                    />
                    <YitInput
                        Component={Select}
                        Icon={BsFillPersonFill}
                        ref={StepsInputs.NewParentForm.relation.ref}
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
                        ref={StepsInputs.NewParentForm.phone.ref}
                        onChange={onChange} name={'parentPhone'}
                        type={"number"} defaultValue={newInfo.parentPhone}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                    />
                    <YitInput
                        Icon={AiOutlineMail}
                        placeholder={'البريد الإكتروني'}
                        ref={StepsInputs.NewParentForm.mail.ref}
                        onChange={onChange} name={'parentMail'}
                        defaultValue={newInfo.parentMail}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                    />
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
                <Grid sx={{}} className={'line'}>
                    <YitInput
                        Icon={BsFillPersonFill}
                        placeholder={'الاسم واللقب'}
                        ref={StepsInputs.NewStudentForm.fullName.ref}
                        onChange={onChange} name={'studentName'}
                        defaultValue={newInfo.studentName}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                        dir={'rtl'}
                    />

                    <YitInput
                        Icon={BsCalendarDate}
                        placeholder={'رقم الهاتف'}
                        ref={StepsInputs.NewStudentForm.birthDate.ref}
                        onChange={(e)=>{
                            newInfo.birthDate = e.target.value
                            setNewInfo(newInfo)
                        }}
                        defaultValue={newInfo.birthDate}
                        type={"date"}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                        fullWidth  dir={'rtl'}
                    />


                </Grid>
                <Grid sx={{}} as="form" className={'line'}>
                    <YitInput
                        placeholder={'البريد الإلكتروني'}
                        Icon={AiOutlineMail}
                        ref={StepsInputs.NewStudentForm.mail.ref}
                        onChange={onChange} name={'mail'}
                        defaultValue={newInfo.mail} type={"email"}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                        fullWidth   dir={'rtl'}
                    />

                        <YitInput
                            Icon={AiOutlinePhone}
                            placeholder={'رقم الهاتف'}
                            ref={StepsInputs.NewStudentForm.phone.ref}
                            onChange={onChange} name={'phone'}
                            type={"tel"} defaultValue={newInfo.phone}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth dir={'rtl'}
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
                        placeholder={'رقم الهاتف'}
                        ref={StepsInputs.NewStudentForm.level.ref}
                        onChange={(e)=>{
                            setLevel(e.target.value)
                            newInfo.level = e.target.value
                        }} name={'level'}
                        arrow={<Box></Box>}
                        sx={{  fontFamily: "'Amiri', serif;"}}
                        defaultValue={newInfo.level}>
                        <option value={-1}>{'اختر من فضلك'}</option>
                        {
                            period !== -1 &&
                            Periods[period]['levels'].map((item, index) =>{
                                return <option value={index}>{item.name}</option>
                            })
                        }
                    </YitInput>

                </Box>
            </Box>

        )
    }
    const ModuleTag = ({Icon, text, id,  selected, ...props }) => {
        return(
            <Box {...props} sx={{display: 'flex', justifyContent: "space-around", alignItems: "center",
                cursor: "pointer",
                fontSize: [20, 20], width: "45%", borderRadius: 20, maxWidth: '160px',
                flexDirection: "row", p: 2, mb: 4, ml: '10px',
                color: selected ? 'white': 'primary',
                backgroundColor: selected ? 'primary': 'white',
                border: '1px solid', borderColor: 'primary'}}>
                <Icon size={20} style={{marginLeft: '5px'}}></Icon>
                <Text>{text}</Text>
            </Box>
        )
    }
    const ModulesForm = ({fullName}) => {

        const [selectedModules, setSelectedModules] = useState(Array(Periods[period]['levels'][level]['modules'].length).fill(false));
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
                { Periods[period]['levels'][level]['modules'].map((name, index) => (
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
    const ConclusionStep = ({fullName}) => {

        const dispatch = useDispatch()
        const [state, setState] = useState(0);
        useEffect(() => {
            setTimeout(()=>{
                setState(1)
                setTimeout(()=>{
                    dispatch({type: HideBackDrop})
                }, 1500)
            }, 1500)
            return () => {

            };
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

                    <>

                    </>

                )
                break;
        }

    }
    // const ConclusionStep = ({fullName}) => {
    //     useEffect(() => {
    //
    //         return () => {
    //
    //         };
    //     }, []);
    //
    //     return (
    //         <>
    //             <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '50% 50%'],}}>
    //                 <InfoTag title={"الاسم واللقب"} value={newInfo.studentName}/>
    //                 <InfoTag title={"تاريخ الميلاد"} value={newInfo.birthDate.toDateString()}/>
    //             </Grid>
    //             <br/>
    //             <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '50% 50%'],}}>
    //                 <InfoTag title={"الهاتف"} value={newInfo.phone}/>
    //                 <InfoTag title={"البريد"} value={newInfo.mail}/>
    //             </Grid>
    //             <br/>
    //             <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '50% 50%'],}}>
    //                 <InfoTag title={"الطور"} value={Periods[newInfo.period]["name"]}/>
    //                 <InfoTag title={"المستوى"} value={Periods[newInfo.period]["levels"][newInfo.level]['name']}/>
    //             </Grid>
    //             <Box sx={{display: "flex", flexDirection: 'row', justifyContent: 'space-around',}}>
    //                 {
    //                     newInfo.selectedModules.map((module, i) =>{
    //                         if(module){
    //                             return    <Text>{Modules[i]}</Text>
    //                         }
    //
    //                     })
    //                 }
    //             </Box>
    //             <br/>
    //             <br/>
    //             <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '50% 50%'],}}>
    //                 <InfoTag title={"ولي الأمر"} value={newInfo.parentFullName}/>
    //                 <InfoTag title={"صفة الولاية"} value={Relations[newInfo.parentRelation].label}/>
    //             </Grid> <br/>
    //             <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '50% 50%'],}}>
    //                 <InfoTag title={"رقم الهاتف"} value={newInfo.parentPhone}/>
    //                 <InfoTag title={"البريد"} value={newInfo.parentMail}/>
    //             </Grid>
    //         </>
    //
    //     )
    // }
    const ValidateStep = (currentStep) =>{
        let valid = true
        for (let Input in StepsInputs[StepsNames[currentStep]]) {
            const {ref, validator} = (StepsInputs[StepsNames[currentStep]][Input])
            if(!validator(ref.current.value)){
                valid = false
                ref.current.classList.add('BadEntry')
                setTimeout(()=>{
                    ref.current.classList.remove('BadEntry')
                }, 500)
            }
        }
        return valid
    }
    const NextStat = () =>{
        // if(ValidateStep(currentStep)){
        if(true){
            switch (currentStep){
                case 0: return true; break

                case 1:
                    return true
                    break;
                case 11:
                    return true
                    break;
                case 2:
                    return true
                    break;
            }
        }else {
            return false
        }

    }
    const HandleNext = (currentStep) =>{
        if (NextStat()){
            switch (currentStep){
                case 0:
                    if(newInfo.type == UserTypes.Student){
                        newInfo.studentName = newInfo.preFullName
                        setCurrentStep(1)
                        setPreviousStep(0)
                    }
                    if(newInfo.type == UserTypes.Parent){
                        newInfo.parentFullName = newInfo.preFullName
                        setCurrentStep(2)
                        setPreviousStep(0)
                    }
                    break;
                case 1:
                    setPreviousStep(1)
                    setCurrentStep(11)
                    break;
                case 11:
                    if(newInfo.type == UserTypes.Student){
                        setCurrentStep(2)
                        setPreviousStep(11)
                    }
                    if(newInfo.type == UserTypes.Parent){
                        setCurrentStep(10)
                        setCurrentStep(11)
                    }
                    break;
                case 2:
                    if(newInfo.type == UserTypes.Student){
                        setCurrentStep(10)
                        setPreviousStep(2)
                    }
                    if(newInfo.type == UserTypes.Parent){
                        setCurrentStep(1)
                        setPreviousStep(2)
                        //go to resume
                    }
            }
        }
        else {

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
            case 11:
                // alert('drawing step 1')
                return <ModulesForm fullName={newInfo.studentName}></ModulesForm>; break;
            case 2:
                // alert('drawing step 2')
                return <NewParentForm></NewParentForm>; break
            case 10:
                // alert('drawing step 2')
                return <ConclusionStep></ConclusionStep>; break
        }
    }

    useEffect(() => {
        // let vh = window.innerHeight
        // document.getElementById('Containerrrr').style.height = vh
        // // Then we set the value in the --vh custom property to the root of the document
        // // document.documentElement.style.setProperty('--vh', `${vh}px`);
        //
        // const onResize = (e)=>{
        //     let vh = window.innerHeight
        //     document.getElementById('Containerrrr').style.height = vh+'px'
        // }
        // window.addEventListener('resize',  onResize)
        //
        // return () => {
        //     window.removeEventListener('resize', onResize)
        // };
    }, []);

    return (
        <Container sx={{mt: '15vh'}}>
            <Box sx={MainStyle.Container} id={'Containerrrr'}>
                <Box sx={MainStyle.TopBox}>
                    <AiOutlineMinus  size={40}></AiOutlineMinus>
                </Box>
                <Box sx={MainStyle.Content}>
                    <Box sx={MainStyle.imageConn}>
                        <Box className={'backdrop'}>
                            <Image src={logo}></Image>
                        </Box>
                        <Image src={rr} sx={{height: '100%', width: '100%'}}></Image>
                    </Box>
                    <Box sx={MainStyle.textConn} id={'ContentBox'}>
                        <Box id={'formsBox'}>
                            {
                                DrawSteps(currentStep)
                            }
                        </Box>
                        <br/>
                        {currentStep !== 10 && <Box id={'actionsBox'} sx={MainStyle.actionsBox}>
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
                        </Box>}

                    </Box>
                </Box>
            </Box>
        </Container>


    )
}

export default RegisterForm

