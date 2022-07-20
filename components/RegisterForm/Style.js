const Style = {
    Main: {

        Container: {

            height: ['89vh', '89vh', '89vh', '89vh', '80vh', '80vh', '80vh'],
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
            display: "flex", flexDirection: 'column', justifyContent: 'space-between',
            overflow: 'auto',
            height: '100%', width: '100%',  p:[4, 2, 2, 2, 6, 6, 6],
            '.line': {
                gap: '10px 10px', gridTemplateColumns: ['100%', '50% 50%'],
                mb: '20px'
            },

            selected: {

            }
        }

    },
}
export default Style
