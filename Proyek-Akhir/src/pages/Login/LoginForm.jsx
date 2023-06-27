import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../store/actions';
import { TextField, Button, Grid, Typography, Box, Card } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { useLocalStorage } from "../../hooks/localStorage";
import NavbarLogin from '../Styles/NavbarLogin';

export const LoginForm = () => {
  const [credentials] = useLocalStorage('credentials', null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') { 
      dispatch(loginSuccess());
      navigate('/admin');
    } else {
      setError('Username atau password tidak valid');
    }
  };

  useEffect(() => {
    if (credentials && isAuthenticated) {
      navigate('/home');
    }
  }, [credentials, isAuthenticated, navigate]);
  
  return (
    <div>
      <NavbarLogin />
      <Typography marginTop={10}>
        <h2>Login</h2>
      </Typography>
      <Typography variant='body1'>
        <div>(Untuk mengakses halaman admin, gunakan username = admin, password = admin)</div>
      </Typography>
      <Card variant="outlined" style={{ padding: '16px', maxWidth: '400px', margin: '0 auto', marginBottom: 70 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              style={{ backgroundColor: '#2b63cf', width: '200px' }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          <Grid item xs={12} marginTop={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography>Atau Login Dengan: </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center" marginBottom={4}>
              <ButtonGoogle />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default LoginForm;
