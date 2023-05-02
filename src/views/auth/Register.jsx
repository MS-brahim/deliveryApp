import React, { useState } from 'react';
import '../../assets/css/Auth.css';
import logo from '../../assets/images/logo1.png'; // with import    
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../enums/InputValidation';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import LoadingButton from '@mui/lab/LoadingButton';

import {
    FormControl,
    InputAdornment,
    IconButton,
    Box,
    TextField,
    Card,
    Typography,
} from '@mui/material';
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const watchAllFields = watch();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = React.useState(false);

    const onRegister = (data) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }

    return (
        <Container maxWidth="sm" sx={{ mt: "10%" }}>
            <Card sx={{ maxWidth: '100%' }}>
                <Link to="/home">
                    <CardMedia
                        component="img"
                        height="194"
                        image={logo}
                        alt="Logo"
                    />
                </Link>
                <CardContent>
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexWrap: 'wrap' }}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl sx={{ width: '100%', mb: 3 }} variant="standard">
                            <TextField
                                label="Email address"
                                placeholder="user@example.com"
                                error={errors.email ? true : false}
                                id="email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: emailRegex,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                helperText={errors.email ? errors.email.message : ""}
                            />

                        </FormControl>
                        <FormControl sx={{ width: '100%', mb: 3 }} variant="standard">
                            <TextField
                                id="password"
                                label="Password"
                                placeholder='Password'
                                error={errors.password ? true : false}
                                type={showPassword ? 'text' : 'password'}
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    }
                                })}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { setShowPassword((show) => !show) }}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={errors.password ? errors.password.message : ""}
                            />
                        </FormControl>
                        <FormControl sx={{ width: '100%', mb: 3 }} variant="standard">
                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                placeholder='Confirm Password'
                                error={errors.confirmPassword ? true : false}
                                type={showPassword ? 'text' : 'password'}
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: value => value === watchAllFields.password,
                                })}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { setShowPassword((show) => !show) }}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={errors.confirmPassword ? "Password and confirm password does not match" : ""}
                            />
                        </FormControl>

                        <LoadingButton
                            onClick={handleSubmit(onRegister)}
                            endIcon={<SendIcon />}
                            sx={{ width: '100%' }}
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                        >
                            <span>Send</span>
                        </LoadingButton>
                        <Typography variant="subtitle1" sx={{ mt: 3, width: '100%', textAlign: 'center' }}>
                            Already have an account?
                            <Link to="/"> Sign in.</Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

// Register.propTypes = {};

export default Register;