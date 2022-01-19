import { connect } from 'react-redux';
import PersonalForm from './PersonalForm';
import { changePersonalData } from '../../redux/actions/actions';

const mapDispatchToProps = { changePersonalData };

export default connect(null, mapDispatchToProps)(PersonalForm);
