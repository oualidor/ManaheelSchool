import React, {useEffect, useState} from "react";
import {Container, Flex, Button, Box, Text, Image, Label, Grid, Switch, Select} from 'theme-ui';
import { Input } from 'theme-ui'
import Style from './Style'
import MuiComponent from "../MuiComponent";
import {TextField} from "@mui/material";
import rr from '../../src/assets/Images/rr.jpg'
import SectionHeader from "../section-header";
const UserTypes = {
    student: 0,
    Parent : 1
}

const Levels = [
    {
        label: 'أولى متوسط',
        value: 21,
    },
    {
        label: 'ثانية متوسط',
        value: 22,
    },
    {
        label: 'ثالثة متوسط',
        value: 23,
    },
    {
        label: 'رابعة متوسط',
        value: 24,
    }

]
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
    const [currentStep, setCurrentStep] = useState(0);
    const [newInfo, setNewInfo] = useState({type: -1});
    const NextButton = React.createRef();


    const NewUnknownForm = ({}) => {
        return (
            <>
                <Grid sx={{
                    gap: '50px 20px',
                    gridTemplateColumns: ['100%', '100%'],
                }} as="form">
                    <Box >
                        <Label>الاسم الكامل</Label>
                        <Input
                            onChange={(e)=>{
                                newInfo.preFullName = e.target.value
                                setNewInfo(newInfo)
                            }}
                            defaultValue={newInfo.preFullName}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box>
                        <Label>أسجل بصفتي</Label>
                        <Select
                            onChange={(e)=>{
                                newInfo.type = e.target.value
                                setNewInfo(newInfo)
                            }}
                            arrow={<Box></Box>}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            defaultValue={newInfo.type}>
                            <option value={-1}>اختر من فضلك</option>
                            <option value={UserTypes.Parent}>ولي أمر</option>
                            <option value={UserTypes.student}>تلميد</option>
                        </Select>
                    </Box>
                </Grid>
            </>

        )
    }
    const NewParentForm = ({}) => {
        const [user, setUser] = useState(-1);
        return (
            <>
                <Grid sx={{
                    gap: '50px 20px',
                    gridTemplateColumns: ['100%', '100%'],
                }} as="form">
                    <Box >
                        <Label>الاسم الكامل</Label>
                        <Input
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box>
                        <Label>أسجل بصفتي</Label>
                        <Select
                            onChange={(e)=>{
                                setUser(e.target.value)
                            }}
                            arrow={
                                <Box>
                                </Box>
                            }
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            defaultValue="Hello">
                            <option value={-1}>اختر من فضلك</option>
                            <option value={0}>ولي أمر</option>
                            <option value={1}>تلميد</option>
                        </Select>
                    </Box>
                    {
                        user == 1 &&   <Box>
                            <Label>أسجل بصفتي</Label>
                            <Select
                                onChange={(e)=>{
                                    setUser(e.target.value)
                                }}
                                arrow={
                                    <Box>
                                    </Box>
                                }
                                sx={{  fontFamily: "'Amiri', serif;"}}
                                defaultValue="Hello">
                                <option value={-1}>اختر من فضلك</option>
                                <option value={0}>ولي أمر</option>
                                <option value={1}>تلميد</option>
                            </Select>
                        </Box>
                    }
                </Grid>
            </>

        )
    }
    const NewStudentForm = ({fullName}) => {
        useEffect(() => {
            NextButton.current.disabled = true
            return () => {

            };
        }, []);

        const [user, setUser] = useState(-1);
        const [birthDate, setBirthDate] = useState(new Date());

        return (
            <>
                <Label>معلومات التلميد</Label>
                <Grid sx={{gap: '50px 20px', gridTemplateColumns: ['100%', '100%'],}} as="form">
                    <Box >
                        <Label>الاسم الكامل</Label>
                        <Input
                            value={fullName}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box >
                        <Label>رقم الهاتف</Label>
                        <Input
                            type={"number"}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box>
                        <Label>تاريخ الميلاد</Label>
                        <Input
                            onChange={(e)=>{
                                let bd  = new Date(e.target.value)
                                setBirthDate(bd)
                            }}
                            type={"date"}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            fullWidth variant={'outlined'} label={'الاسم الكامل'} dir={'rtl'}></Input>
                    </Box>
                    <Box>
                        <Label>المستوى الدراسي</Label>
                        <Select
                            onChange={(e)=>{
                                newInfo.level = e.target.value
                                setNewInfo(newInfo)
                            }}
                            arrow={<Box></Box>}
                            sx={{  fontFamily: "'Amiri', serif;"}}
                            defaultValue={newInfo.type}>
                            <option value={-1}>اختر من فضلك</option>
                            {
                                Levels.map(itemn =>{
                                    return <option value={itemn.value}>{itemn.label}</option>
                                })
                            }
                        </Select>
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
    const HandleNext = (currentStep) =>{
        alert("hihi")
        switch (currentStep){
            case 0:
                if(newInfo.type == UserTypes.student){
                    newInfo.studentName = newInfo.preFullName
                    setCurrentStep(1)
                }else {
                    setCurrentStep(2)
                    newInfo.parentName =  newInfo.preFullName
                }
                break;
        }
    }
    function drawSteps(currentStep){
        switch(currentStep){
            case 0:
                return <NewUnknownForm></NewUnknownForm>; break
            case 1:
                return <NewStudentForm fullName={newInfo.studentName}></NewStudentForm>
        }
    }


    useEffect(() => {
        NextButton.current.disabled = false
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
                <SectionHeader
                    slogan="تسجيل جديد"
                    title="أنت على بعد خطوات قليلة "
                />
                {
                    drawSteps(currentStep)
                }
                <br/>
                {
                    currentStep !== 0 &&     <Button
                    sx={{ml: 2}}
                        type={"button"} onClick={()=>{
                        setCurrentStep(currentStep-1)
                    }}>
                        السابق
                    </Button>
                }
                <Button
                    ref={NextButton} type={"button"}  disabled={false} onClick={()=>{HandleNext(currentStep)}}>
                    التالي
                </Button>
            </Box>
        </Box>
        </Container>
    )
}

export default RegisterForm

