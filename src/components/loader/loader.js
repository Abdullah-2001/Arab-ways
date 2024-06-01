import { RingSpinner } from 'react-spinner-overlay'

function Loader(props) {
    const { loading, size } = props
    return (
        <>
            <RingSpinner
                loading={loading}
                size={size ? size : 28}
                color="white"
                borderWidth={3}
            />
        </>
    )
}

export default Loader