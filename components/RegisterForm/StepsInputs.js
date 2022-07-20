import React from "react";

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
        fullName : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },
        birthDate : {
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
        phone : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },
        period : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
        },
        level : {
            ref: React.createRef(), validator : (value = this.ref.current.value)=>{
                if(value == ""){
                    return false;
                }
                return true
            }
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
        name : 'الابتدائي',
        levels :  [
            { name: 'أولى', modules : [0, 3]},
            { name:'ثانية', modules : [0, 3]},
            { name:'ثالث', modules : [0, ,3, 5]},
            { name:'رابعة', modules : [0, 3, 5]},
            { name:'الخامسة', modules : [0, 3, 5]},
        ]
    },
    {
        name : 'المتوسط',
        levels :  [
            { name: 'أولى', modules :  [0, 1, 2, 3, 4, 5, 6]},
            { name:'ثانية', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name:'ثالث', modules :  [0, 1, 2, 3, 4, 5, 6]},
            { name:'رابعة', modules :  [0, 1, 2, 3, 4, 5, 6]}
        ]
    },
    {
        name : 'الثانوي',
        levels :  [
            { name: 'أولى علمي', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name: 'أولى أدبي', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name:'ثانية علوم تجريبة', modules : [0, 1, 2, 3, 4, 5, 6]},
            { name:'ثانية تفني رياضي', modules : [0, 1, 2, 3, 4, 5, 6, 7, 8]},
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

module.exports = {StepsInputs, Periods, Relations}

