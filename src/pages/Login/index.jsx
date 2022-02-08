/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { LOGIN } from '../../providers/Auth/actions';
import { AuthContext, AuthDispatchContext } from '../../providers/Auth/provider';

const useStyles = makeStyles({
  form: {
    width: '520px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const initialForm = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un email correcto')
    .required('Este campo es requerido'),
  password: yup
    .string()
    .required('Este campo es requerido'),
});

const Login = () => {
  const auth = useContext(AuthContext);
  const dispatchAuth = useContext(AuthDispatchContext);
  const classes = useStyles();
  const {
    // watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialForm,
    mode: 'onChange', // onBlur, onSubmit
    resolver: yupResolver(schema),
  });

  console.log({ auth });

  if (auth.isLoggedIn) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data) => {
    console.log({ data });
    dispatchAuth({
      type: LOGIN,
      payload: data,
    });
  };

  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 14, pb: 6 }}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Controller
              id="email"
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  fullWidth
                  label="email"
                  placeholder="Ingrese su email"
                  error={!!errors?.email}
                  helperText={!!errors?.email && errors?.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              id="password"
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  fullWidth
                  label="password"
                  placeholder="Ingrese su contraseña"
                  error={!!errors?.password}
                  helperText={!!errors?.password && errors?.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              ENVIAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
