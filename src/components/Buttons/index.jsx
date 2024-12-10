import { Buttons } from './Buttons'

function ContainerButtons({children, ...props}) {
    return (
        <Buttons {...props}>{children}</Buttons>
    )
}

export default ContainerButtons