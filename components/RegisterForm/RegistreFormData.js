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
        level : {
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
        fullName : {
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

}
const Periods = [
    {
        name : '??????????????????',
        levels :  [
            { name: '????????', modules : [0, 3]},
            { name:'??????????', modules : [0, 3]},
            { name:'????????', modules : [0, ,3, 5]},
            { name:'??????????', modules : [0, 3, 5]},
            { name:'??????????????', modules : [0, 3, 5]},
        ]
    },
    {
        name : '??????????????',
        levels :  [
            { name: '????????', modules :  [0, 1, 2, 3, 4, 5, 6]},
            { name:'??????????', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name:'????????', modules :  [0, 1, 2, 3, 4, 5, 6]},
            { name:'??????????', modules :  [0, 1, 2, 3, 4, 5, 6]}
        ]
    },
    {
        name : '??????????????',
        levels :  [
            { name: '???????? ????????', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name: '???????? ????????', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name:'?????????? ???????? ????????????', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name:'?????????? ???????? ??????????', modules : [0, 1, 2, 3, 4, 5, 6, 7, 8]},
        ]
    }
]
const Relations = [
    {
        label: '????????????',
        value: 0,
    },
    {
        label: '??????????????',
        value: 1,
    },
    {
        label: '???? / ??????',
        value: 2,
    },
    {
        label: '?????? ??????',
        value: 3,
    }

]
const SexArray = [
    {
        label: '??????',
        Id: 0,
    },
    {
        label: '????????',
        Id: 1,
    },

];
const Modules = [
    {
        name: '??????????????????',
        icon: BsCodeSquare,
    },
    {
        name: '????????????????',
        icon: BsCpu,
    },
    {
        name: '???????????? ????????????????',
        icon: BsCloudLightningRain,
    },
    {
        name: '??????????????',
        icon: BsFillBadgeArFill,
    },
    {
        name: '????????????????????',
        icon: BsHeart,
    },
    {
        name: '????????????????',
        icon: BsHeart   ,
    },
    {
        name: '??????????????????',
        icon: BsCodeSquare,
    },
    {
        name: '?????????? ??????????',
        icon: BsCodeSquare,
    },
    {
        name: '?????????? ????????????????',
        icon: BsLightningCharge,
    },
];
const UserTypes = {
    Student: 0,
    Parent : 1
}

module.exports = {StepsValidator, StepsInputs, Periods, Relations, SexArray, Modules, UserTypes}

