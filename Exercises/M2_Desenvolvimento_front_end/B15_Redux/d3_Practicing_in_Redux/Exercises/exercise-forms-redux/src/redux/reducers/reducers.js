import { CHANGE_PERSONAL_DATA, CHANGE_PROFESSIONAL_DATA } from '../actions/actions';

const INITIAL_STATE = {
  dadosPessoais: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  dadosProfissionais: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_PERSONAL_DATA:
    return { ...state, dadosPessoais: { ...action.payload } };

  case CHANGE_PROFESSIONAL_DATA:
    return { ...state, dadosProfissionais: { ...action.payload } };

  default:
    return state;
  }
}
