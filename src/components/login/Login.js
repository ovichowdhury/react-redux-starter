import { connect } from 'react-redux';
import LoginPresentation from './LoginPresentation';
import {loginRequest} from '../../actions/loginAction';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (p) => {
           dispatch(loginRequest(p)); 
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(LoginPresentation);
