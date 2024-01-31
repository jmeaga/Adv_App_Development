import React, { useState } from 'react';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Signup.css';

function SignIn() {
  const defaultTheme = createTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [role, setRole] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Email validation
    if (!email || !emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
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

    // Continue with form submission
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phoneNumber: data.get('phoneNumber'),
      role: data.get('role'),
    });
  };

  return (
    <div className='conts'>
  
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
      
       
<div className='van'>
<Typography component="h4" variant="h5">
REGISTERATION:)
</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
       
          <TextField
          
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
          
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
          error={phoneNumber.length > 0 && !isValidPhoneNumber(phoneNumber)}
  helperText={
    phoneNumber.length > 0 && !isValidPhoneNumber(phoneNumber)
      ? 'Invalid mobile number (only digits, max 10 characters)'
      : ''
  }
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Mobile Number"
            name="phoneNumber"
            autoComplete="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            error={emailError}
            helperText={emailError ? 'Valid email is required' : ''}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={passwordError}
            helperText={
              passwordError
                ? 'Password must be at least 8 characters with at least 1 Special character, 1 Uppercase letter, and 1 Digit'
                : ''
            }
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="role"
            label="Role"
            name="role"
            autoComplete="role"
            autoFocus
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <Link to="/">
          <Button type="submit" fullWidth variant="contained" sx={{ mt:0.1, mb: 0.1 }}>
            REGISTER
          </Button>
          </Link>
          <Grid item>
            <Link to="/login"><a href="/login" variant="body2">
           
              {"Already have an account? Log In"}
              </a>
            </Link>
          </Grid>
        </Box>
        </div>
      </Container>
    </ThemeProvider>
    </div>
   
   
  );
}

export default SignIn;
