import React from "react";
import _Student from "../../src/Models/_Student";
import {BsCloudLightningRain, BsCodeSquare, BsCpu, BsFillBadgeArFill, BsHeart, BsLightningCharge} from "react-icons/bs";

const StepsValidator = {
    NewUnknownForm: {
        onSubmit: async () => {

            return {finalResult: true, result: 'Unknown error occurred' }
        },
        MultiStates : false
    },
    NewStudentForm : {
        onSubmit : _Student.create,
        MultiStates: true,

    },
    ModulesForm:{
        onSubmit: async () => {
            alert('hihi')
            return {finalResult: true, result: 'Done' }
        },
    }

}
const StepsInputs = {
    NewUnknownForm: {
        // type:
        //     {
        //         ref: React.createRef(), validator : ()=>{
        //             if(value == -1){
        //                 return false;
        //             }
        //             return true
        //         }
        //     }
    },
    NewStudentForm: {
        name : {
            ref: React.createRef(), inputRef: React.createRef(),
            validator : (value)=>{
                if(value == ""){
                    return false;
                }
                return true
            },
            i: 2
        },
        sex : {
            ref: React.createRef(), inputRef: React.createRef(),
            validator : (value)=>{
                if(value == -1){
                    return false;
                }
                return true
            },
            nested: true
        },
        birthDate : {
            ref: React.createRef(), inputRef: React.createRef(), validator : (value)=>{
                if(value == ""){
                    return false;
                }
                return true
            },

        },
        phone : {
            ref: React.createRef(), inputRef: React.createRef(),
            validator : (value)=>{
                if(value.length !== 10){
                    return false;
                }
                return true
            },     i: 2
        },
        // period : {
        //     ref: React.createRef(), validator : (value)=>{
        //         if(value == ""){
        //             return false;
        //         }
        //         return true
        //     }
        // },
        currentLevel : {
            ref: React.createRef(), inputRef: React.createRef(),
            validator : (value)=>{
                if(value == -1){
                    return false;
                }
                return true
            },
            nested: true
        },
    },
    NewParentForm: {
        name : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },
        relation : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },
        phone : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },
        mail : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },


    },
    ModulesForm:{

    }

}
const Periods = [
    {
        name : 'الابتدائي',
        levels :  [
            { id: 0, name: 'أولى', modules : [0, 3]},
            { id: 1, name:'ثانية', modules : [0, 3]},
            { id: 2, name:'ثالث', modules : [0, ,3, 5]},
            { id: 3, name:'رابعة', modules : [0, 3, 5]},
            { id: 4, name:'الخامسة', modules : [0, 3, 5]},
        ]
    },
    {
        name : 'المتوسط',
        levels :  [
            { id: 10,  name: 'أولى', modules :  [0, 1, 2, 3, 4, 5, 6]},
            { id: 11,  name:'ثانية', modules : [0, 1, 2, 3, 4, 5, 6]},
            { id: 12,  name:'ثالث', modules :  [0, 1, 2, 3, 4, 5, 6]},
            { id: 13,  name:'رابعة', modules :  [0, 1, 2, 3, 4, 5, 6]}
        ]
    },
    {
        name : 'الثانوي',
        levels :  [
            { id: 21, name: 'أولى علمي', modules : [0, 1, 2, 3, 4, 5, 6]},
            { id: 22, name: 'أولى أدبي', modules : [0, 1, 2, 3, 4, 5, 6]},
            { id: 31, name:'ثانية علوم تجريبة', modules : [0, 1, 2, 3, 4, 5, 6]},
            { id: 32, name:'ثانية تفني رياضي', modules : [0, 1, 2, 3, 4, 5, 6, 7, 8]},
        ]
    }
]
const Relations = [
    {
        label: 'الوالد',
        value: 0,
    },
    {
        label: 'الوالدة',
        value: 1,
    },
    {
        label: 'أخ / أخت',
        value: 2,
    },
    {
        label: 'غير دلك',
        value: 3,
    }

]
const SexArray = [
    {
        label: 'دكر',
        Id: 0,
    },
    {
        label: 'أنثى',
        Id: 1,
    },

];
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

module.exports = {StepsValidator, StepsInputs, Periods, Relations, SexArray, Modules, UserTypes}

