import {Box, Spinner, Text} from "theme-ui";
import DoneMark from "../DoneMark";
import {AiFillCloseCircle} from "react-icons/ai";
import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";


const MultiStatesComponent = forwardRef(({state, props,  children, }, ref)=>{
    const [working, setWorking] = useState(false);
    useImperativeHandle(ref, () => ({
        setWorking(v){
          setWorking(v)
        },
    }));
    useEffect(()=>{
        setTimeout(()=>{

        }, 3000)
    }, [])
    // switch(state){
    //     case 0:
    //         return (
    //             <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center',  height: '100%', mt: '120px'}}>
    //                 <Spinner size={150}/>
    //             </Box>
    //         )
    //         break;
    //     case 1:
    //         return (
    //             <Box ref={ref} sx={{position: "relative"}}>
    //                 {
    //                     working && <Box className={'backdrop'}><Spinner size={150}/></Box>
    //                 }
    //
    //                 {children}
    //             </Box>
    //         )
    //         break;
    //     case 2:
    //         return (
    //             <Box sx={{
    //                 display: "flex", flexDirection: 'column',
    //                 color: 'primary', backgroundColor: '',
    //                 alignItems: 'center', justifyContent: 'center',  height: '100%', mt: '120px'}}>
    //                 <Box sx={{
    //                     display: "flex",
    //                     color: 'primary',
    //                     alignItems: 'center', justifyContent: 'center', height: '100%'}}>
    //                     <DoneMark></DoneMark>
    //                     <Text sx={{textAlign: "right", mr: '30px'}} as={'h2'}>تم تسجيل طلبكم بنجاح، سيتصل بكم أحد الأعوان لتأكيد تسجيلكم</Text>
    //                 </Box>
    //             </Box>
    //         )
    //         break;
    //     case -1:
    //         return (
    //             <Box sx={{
    //                 display: "flex", flexDirection: 'column',
    //                 color: 'primary', backgroundColor: '',
    //                 alignItems: 'center', justifyContent: 'center',  height: '100%', mt: '120px'}}>
    //                 <Box sx={{
    //                     display: "flex",
    //                     color: 'primary',
    //                     alignItems: 'center', justifyContent: 'center', height: '100%'}}>
    //                     <AiFillCloseCircle size={80}></AiFillCloseCircle>
    //                     <Text sx={{textAlign: "right", mr: '30px'}} as={'h2'}>
    //                         حدت خطأ أثناء التسحيل، الرجاء التأكد من اعدادات الأنترنت بجاهزك
    //                     </Text>
    //                 </Box>
    //                 <Text sx={{textAlign: "right", mr: '30px'}} as={'h2'}>
    //                     أطا كنت تواجه صعوبة في التسجيل يرجى الاتصال بالرقم 0550750576
    //                 </Text>
    //             </Box>
    //         )
    //         break;
    //
    //     default:
    //         return (
    //             <Box ref={ref}>
    //                 {children}
    //             </Box>
    //
    //         )
    // }

    return(
        <Box ref={ref} {...props}  >
            {
                working && <Box className={'backdrop FRCC'} sx={{}}><Spinner size={150}/></Box>
            }

            {children}
        </Box>
    )
})


export default MultiStatesComponent
