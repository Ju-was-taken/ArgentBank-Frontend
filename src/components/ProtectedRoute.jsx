import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function ProtectedRoute( {children} ) {
    const token = useSelector((state) => state.user.token)

    if (!token) {
        return <Navigate to='/login' replace></Navigate> // replace evite que le bouton retour du naviguateur ramene vers /profile
    }

    return children
}


export default ProtectedRoute