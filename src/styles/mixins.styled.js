
export const flexCenter = ({dir='row', jc='center', ai='center', wr='no-wrap'} = {})=> `
    display: flex;
    direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
    flex-wrap: ${wr};
`