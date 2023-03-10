import { useState } from "react";
import { Box, TextField, Button, Avatar, Typography, Link, Grid } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        otp: "",
        errors: {
            email: "",
            password: "",
            otp: "",
        },
    });

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            errors: {
                ...formData.errors,
                [e.target.name]: e.target.value.trim() === "" ? "Campo obbligatorio" : "",
            },
        });
    };

    const handleClickOTP = async (e) => {
        e.preventDefault();
        const { email } = formData;
        const errors = {
            email: email.trim() === "" ? "Campo obbligatorio" : "",
        };
        if (errors.email !== "") {
            setFormData({ ...formData, errors });
        } else {
            try {
                await axios.post("/auth/otp", formData);
                toast.success("Codice OTP inviato correttamente!");
            } catch (error) {
                console.log(error.response.data);
                toast.error(`${error.response.data.message}`);
            }
        }

    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password, otp } = formData;
        const errors = {
            email: email.trim() === "" ? "Campo obbligatorio" : "",
            password: password.trim() === "" ? "Campo obbligatorio" : "",
            otp: otp.trim() === "" ? "Campo obbligatorio" : "",
        };
        if (errors.email !== "" || errors.password !== "" || errors.otp !== "") {
            setFormData({ ...formData, errors });
        } else {
            try {
                const otp = parseInt(formData.otp)
                const reqBody = { email, password, otp }
                await axios.post("/auth/login", reqBody)
                    .then(response => localStorage.setItem("token", response.data.token))
                navigate('/');
            } catch (error) {
                console.log(error);
                toast.error(`${error.response.data.message}`);
            }
        }
    };

    const { email, password, otp, errors } = formData;

    return (
        <Box sx={{
            maxWidth: 400,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Avatar sx={{ bgcolor: 'secondary.main', mx: 'auto', mt: '15%' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" sx={{ my: '2%' }}>
                Accesso
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleFormChange}
                    margin="normal"
                    required
                    fullWidth
                    error={errors.email !== ""}
                    helperText={errors.email}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handleFormChange}
                    margin="normal"
                    required
                    fullWidth
                    error={errors.password !== ""}
                    helperText={errors.password}
                />
                <Grid container spacing={2} sx={{ my: .5 }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ my: -.28 }}>
                            <Button variant="contained" color="secondary" onClick={handleClickOTP}>
                                Ricevi codice OTP alla mail inserita
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="otp"
                            name="otp"
                            label="Codice OTP"
                            type="number"
                            fullWidth
                            value={otp}
                            onChange={handleFormChange}
                            error={errors.otp !== ""}
                            helperText={errors.otp}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'right', mt: 2 }}>
                    <Link variant="body2" href="/registration">Non hai un account? Registrati</Link>
                </Box>
                <Button type="submit" variant="contained" fullWidth sx={{ my: '5%' }}>
                    Accedi
                </Button>
            </form>
            <ToastContainer />
        </Box>
    );
};

export default LoginForm;



