import  {  useState } from 'react';
import { TextField, Button, Typography, Container, Link, IconButton, InputAdornment, Card, CardContent,Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Visibility, VisibilityOff } from '@mui/icons-material';
 import { useLoginMutation } from '../api/mutations';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

   const loginMutation = useLoginMutation();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem('userName', 'Ayyoub');
     await loginMutation.mutate({ email, password });

  console.log(e)
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsEmailValid(/\S+@\S+\.\S+/.test(value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              required
              margin="normal"
              error={!isEmailValid}
              helperText={!isEmailValid && "Invalid email"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon color={!isEmailValid ? 'error' : 'action'} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              required
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link href="/forgot-password" variant="body2">
              Forgot my password
            </Link>
            <Button
              type="submit"
              onClick={handleLogin}
              color="primary"
              fullWidth
              sx={{marginTop:'1.5em'}}
               disabled={loginMutation.isLoading}

            >
              Login
            </Button>
            {loginMutation.isError && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              An error occurred: {loginMutation.error.message}
            </Alert>
          )}
          {loginMutation.isSuccess && (
            <Alert severity="success" sx={{ marginTop: 2 }}>
              Logged in successfully!
            </Alert>
          )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
