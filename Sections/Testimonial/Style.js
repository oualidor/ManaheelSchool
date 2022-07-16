const Style = {
    Main: {
        Container: {
            position: 'relative',
            width: "100%", backgroundColor: '',
        },

    },

    Entry : {
        container : {

            backgroundColor: '',
            width: "100%",
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: ['column', 'column', 'column', 'column', 'row', 'row', 'row']



        },
        textCon: {
            pt: 150,
            textAlign: "right",
            backgroundColor: '', width: ['100','60%'],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '.nameTag' :{
                fontSize: ["28px", "40px", "30px", "34px", '34px', "38px", "45px"],
            }
        },
            TextTag: {
                fontSize: ["28px", "40px", "30px", "34px", '34px', "38px", "28px"],
            },
            nameTag: {
                color: 'primary',
                fontSize: ["28px", "40px", "30px", "34px", '34px', "38px", "45px"],
            },
        imgCon: {
            height: 450,
            width: ['100','100%', '100%', '100%', 400, 400, 400],
            position: 'relative',
            backgroundColor: ''
        },
        frame: {
            border: "2px solid #2E58A6",
            height: '90%',
            width: '90%',
            position: 'absolute',
            zIndex: -1
        },
        img: {
            top: '5%',
            position: 'absolute',
            left: "5%",
            objectFit: 'cover0',
            width:  '90%', height: '90%'
        },
        backImage : {
            backgroundColor: '#2E58A6',
            top: '10%',
            position: 'absolute',

            objectFit: 'cover',
            width:  '90%', height: '90%'

        }
    }
}

export default Style
