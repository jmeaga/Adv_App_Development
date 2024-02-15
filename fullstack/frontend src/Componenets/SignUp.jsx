import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Import Axios
import './Signup.css';

function SignIn() {
  const defaultTheme = createTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (event) => { // Make the function asynchronous
    event.preventDefault();

    // Email validation
    if (!email || !emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    // Clear errors if fields are filled
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    try {
      // Send the form data to your backend endpoint
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        email,
        password,
        confirmPassword,
        name,
      });
      console.log(response.data); // Log the response from the server
      navigate('/'); // Navigate to the home page after successful registration
    } catch (error) {
      console.error('An error occurred:', error); // Log any errors that occur
    }
  };

  return (
    <div className="conts">
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          className="container"
          sx={{
            backgroundImage: 'url("")', // Replace with the path to your image
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="van">
            <Typography component="h4" variant="h5">
              REGISTRATION :)
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                error={passwordError}
                helperText={
                  passwordError
                    ? 'Password must be at least 4 characters with at least 1 Special character, 1 Uppercase letter, and 1 Digit'
                    : ''
                }
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                error={confirmPasswordError}
                helperText={confirmPasswordError ? 'Passwords do not match' : ''}
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SignIn;
