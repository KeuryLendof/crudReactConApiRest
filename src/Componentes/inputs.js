import React, {Component} from "react";
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
            '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
        />
    );
});
TextMaskCustom.propTypes = {
name: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};

const TextMaskCedula = React.forwardRef(function TextMaskCedula(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
        {...other}
        mask="#00-0000000-0"
        definitions={{
            '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
        />
    );
});
TextMaskCedula.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};




const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
});
  
NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// const [values, setValues] = useState({
//   textmask: '',
//   numberformat: '',
//   cedulamask: ''
// });

  
class Inputs extends Component{

  state={
    form:{
      textmask: '',
      numberformat: '',
      cedulamask: ''
    }
  }

  
  handleChange =async e=> {
    //e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  };

    render(){
      const{form}=this.state;
      return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Nombre" variant="standard"/>
          <br/>
          <FormControl variant="standard">
            <InputLabel htmlFor="formatted-text-mask-input">Cedula</InputLabel>
            <Input
              value={form.cedulamask}
              onChange={this.handleChange}
              name="cedulamask"
              id="formatted-text-mask-input"
              inputComponent={TextMaskCedula}
            />
          </FormControl>
          <br/>
          <TextField id="standard-basic" label=" " variant="standard" type="date"/>
          <br/>
          <TextField id="standard-basic" label="Puesto" variant="standard" />
          <br/>
          <FormControl variant="standard">
            <InputLabel htmlFor="formatted-text-mask-input">Telefono</InputLabel>
            <Input
              value={form.textmask}
              onChange={this.handleChange}
              name="textmask"
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
          <br/>
          <TextField id="standard-basic" label="Email" variant="standard" type="email"/>
          <br/>
          <TextField
              label="Salario"
              value={form.numberformat}
              onChange={this.handleChange}
              name="numberformat"
              id="formatted-numberformat-input"
              InputProps={{
                  inputComponent: NumberFormatCustom,
              }}
              variant="standard"
          />
          <br/>
          <TextField id="standard-basic" label=" " variant="standard" type="date"/>
  
        </Box>
      );
    }
  
    
}

export default Inputs;