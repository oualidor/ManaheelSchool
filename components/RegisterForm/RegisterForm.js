import React, {useEffect, useState} from "react";
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
import { BsFillPersonLinesFill, BsFillPeopleFill, BsBookmarkCheckFill, BsCheckAll } from "react-icons/bs";



const Modules = [
    'الرياضيات',
    'الفيزياء',
    'العلوم الطبيعية',
    'العربية',
    'الانجليزية',
    'الفرنسية',
    'اجتماعيات',
    'هندسة مدنية',
    'هندسة كهريائية',
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

        }, 500)

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
    const NewUnknownForm = ({}) => {

        return (
            <>
                <Text as={'h1'} sx={{textAlign: 'center'}}>
                    مرحبا بك في فضاء التسحيل الأولي لمدرسة المناهل
                </Text>

                <Text as={'h1'} sx={{textAlign: 'center'}}>
                    الرجاء الاهتمام بـ:
                </Text>
                <ul>
                    <li>
                        <Text sx={{fontSize: 6}}>قراءة شروط التسحيل جيدا</Text>
                    </li>
                    <li>
                        <Text sx={{fontSize: 6}}>التأكد من صحة المعلومات</Text>
                    </li>
                    <li>
                        <Text sx={{fontSize: 6}}>
                            التأكد من ادخل رقم الهاتف الشحصي لأننا سنتصل بكم من أجل تأكيد التسجيل
                        </Text>
                    </li>
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
                    <Box >
                        <Label>الاسم الكامل</Label>
                        <Input
                            ref={StepsInputs.NewParentForm.fullName.ref}
                            onChange={onChange} name={'parentFullName'}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box>
                        <Label>صفة الولاية</Label>
                        <Select
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
                        </Select>
                    </Box>
                    <Box >
                        <Label>رقم الهاتف</Label>
                        <Input
                            ref={StepsInputs.NewParentForm.phone.ref}
                            onChange={onChange} name={'parentPhone'}
                            type={"number"} defaultValue={newInfo.parentPhone}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box >
                        <Label>البريد</Label>
                        <Input
                            ref={StepsInputs.NewParentForm.mail.ref}
                            onChange={onChange} name={'parentMail'}
                            defaultValue={newInfo.parentMail}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>

                    {/*{*/}
                    {/*    (getAge(birthDate) < 18 && birthDate !== new Date())  &&   <Box>*/}
                    {/*        <Label>أسجل بصفتي</Label>*/}
                    {/*        <Select*/}
                    {/*            onChange={(e)=>{*/}
                    {/*           */}
                    {/*            }}*/}
                    {/*            arrow={*/}
                    {/*                <Box>*/}
                    {/*                </Box>*/}
                    {/*            }*/}
                    {/*            sx={{  fontFamily: "'Amiri', serif;"}}*/}
                    {/*            defaultValue="Hello">*/}
                    {/*            <option value={-1}>اختر من فضلك</option>*/}
                    {/*            <option value={0}>ولي أمر</option>*/}
                    {/*            <option value={1}>تلميد</option>*/}
                    {/*        </Select>*/}
                    {/*    </Box>*/}
                    {/*}*/}
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
                    <Box >
                        <Label>الاسم الكامل</Label>
                        <Input
                            ref={StepsInputs.NewStudentForm.fullName.ref}
                            value={fullName} type={'name'}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box>
                        <Label>تاريخ الميلاد</Label>
                        <Input
                            ref={StepsInputs.NewStudentForm.birthDate.ref}
                            onChange={(e)=>{
                                let bd  = new Date(e.target.value)
                                newInfo.birthDate = bd
                                setNewInfo(newInfo)
                            }}
                            defaultValue={newInfo.birthDate}
                            type={"date"}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>

                </Grid>
                <Grid sx={{}} as="form" className={'line'}>
                    <Box >
                        <Label>البريد الالكتروني</Label>
                        <Input
                            ref={StepsInputs.NewStudentForm.mail.ref}
                            onChange={onChange} name={'mail'}
                            defaultValue={newInfo.mail} type={"email"}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>

                    <Box >
                        <Label>رقم الهاتف</Label>
                        <Input
                            ref={StepsInputs.NewStudentForm.phone.ref}
                            onChange={onChange} name={'phone'}
                            type={"tel"} defaultValue={newInfo.phone}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                </Grid>
                <br/>
                <br/>
                <Box sx={{display: 'flex', fontSize: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <SelectButton
                        onClick={()=>{
                            setPeriod(0)
                            newInfo.period = 0
                        }}
                        selectedValue={period}
                        id={0}
                        Icon={BsFillPersonLinesFill} text={'ابتدائئ'}></SelectButton>
                    <SelectButton

                        onClick={()=>{
                            setPeriod(1)
                            newInfo.period = 1
                        }}
                        selectedValue={period}
                        id={1}
                        Icon={BsFillPersonLinesFill} text={'متوسط'}></SelectButton>
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
                    <Select
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
                    </Select>
                </Box>
            </Box>

        )
    }
    const ModuleTag = ({Icon, text, id,  selected, ...props }) => {
        return(
            <Box {...props} sx={{display: 'flex', justifyContent: "center", alignItems: "center",
                cursor: "pointer",
                fontSize: [20, 20], width: "30%", borderRadius: 20,
                flexDirection: "column", p: 3, mb: 4,
                color: selected ? 'white': 'primary',
                backgroundColor: selected ? 'primary': 'white',
                border: '1px solid', borderColor: 'primary'}}>
                <Icon size={35}></Icon>
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
                        Icon={Box} text={Modules[name]}></ModuleTag>
                ))}
            </Box>
        )
    }
    const ConclusionStep = ({fullName}) => {
        const [state, setState] = useState(0);
        useEffect(() => {

            return () => {

            };
        }, []);
        switch(state){
            case 0:
                return (

                    <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center',  height: '100%'}}>
                        <Spinner size={150}/>
                    </Box>

                )
                break;
            case 1:
                return (

                    <Box sx={{
                        display: "flex", flexDirection: 'column',
                        color: 'primary',
                         alignItems: 'center', justifyContent: 'center',  height: '100%'}}>
                        <Box
                            sx={{
                                display: "flex",
                                color: 'primary',
                                alignItems: 'center', justifyContent: 'center'}}>
                            <BsBookmarkCheckFill size={160}></BsBookmarkCheckFill>
                            <Text sx={{textAlign: "center"}} as={'h1'}>تم تسجيل طلبكم بنجاح، سيتصل بكم أحد الأعوان لتأكيد تسجيلكم</Text>
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

        return () => {

        };
    }, []);

    return (
        <Container>
            <Box sx={MainStyle.Container}>
            <Box sx={MainStyle.imageConn}>
                <Box className={'backdrop'}></Box>
                <Image src={rr} sx={{height: '100%', width: '100%'}}></Image>
            </Box>
            <Box sx={MainStyle.textConn}>
                {
                    DrawSteps(currentStep)
                }
                {
                    currentStep !== 10 &&

                    <Box>
                        {
                            currentStep !== 0 &&     <Button
                            sx={{ml: 2}}
                            type={"button"} onClick={()=>{
                            setPreviousStep(currentStep)
                            setCurrentStep(previousStep)

                        }}>
                            السابق
                            </Button>
                        }
                    <Button
                        ref={NextButton} type={"button"}   onClick={()=>{HandleNext(currentStep)}}>
                        {NEXT}
                    </Button>
                    {
                        currentStep == 10 &&
                        <Button
                        ref={NextButton} type={"button"}   onClick={()=>{HandleNext(currentStep)}}>
                        {SAVE}
                        </Button>
                    }
                    </Box>
                }
            </Box>
        </Box>
        </Container>
    )
}

export default RegisterForm

