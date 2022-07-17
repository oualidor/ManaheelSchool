const Style = {
    Main: {

        Container: {
            p: 0,
            display: "grid",
            gridTemplateColumns: ['100%', '100%', '100%', '55% 45%'],
            width: "100%", backgroundColor: 'white',
        },

        imageConn : {
            display: ['none', 'none', 'none', 'flex'],
            position: 'relative',
            height: '100%', width: '100%',
        },
        textConn : {
            height: '100%', width: '100%',  p:5
        }

    },
}
export default Style
