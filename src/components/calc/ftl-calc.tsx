"use client";
import React from "react";
import styles from "./ftl-calc.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { actions as ftlCalcActions } from "@/redux/ftl-calc-slice/ftl-calc.slice";
import { actions as basicCalcActions } from "@/redux/basic-calc-slice/basic-calc.slice";
import useDebouncedFunction from "@/utils/useDebounce";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useGetAtiCitySearchDataMutation } from "@/api/api";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#FFF",
            main: "#FFF",
            dark: "#FFF",
            contrastText: "#fff",
        },
    },
});

const FtlCalc: React.FC = () => {
    const dispatch = useAppDispatch();
    const [getSearchData, data] = useGetAtiCitySearchDataMutation();
    const { validCity, carType } = useAppSelector((store) => store.ftlCalc);
    const cities = data && data?.data?.cities;
    const direction = data && data?.data?.direction;
    //const { formData } = useAppSelector((store) => store.ftlCalc);

    

    const inputOnChangeHandler = (e: any) => {
        dispatch(
            ftlCalcActions.setFormData({
                name: e.target.id,
                value: e.target.value,
            })
        );
        const data: { id: string; value: string } = {
            id: e.target.id,
            value: e.target.value,
        };
        debouncedDropdown(data);
    };

    const setDropdownOpacity = (data: { id: string; value: string }) => {
        const userCityData = {
            userCity: data.value,
            direction: data.id,
        };
        getSearchData(userCityData);
    };

    const debouncedDropdown = useDebouncedFunction(
        (data: { id: string; value: string }) => setDropdownOpacity(data),
        300
    );

    const clickHandler = (e: any) => {
        const validCity = cities!.filter(
            (item: any) => item.FullName === e.target.textContent
        )[0];
        dispatch(
            ftlCalcActions.setValidCity({ name: direction, value: validCity })
        );
        
    };

    const keyDownHandler = (e: any) => {
        //дописать
    }



    const submitHandler = async (e: any) => {
        e.preventDefault();
        dispatch(basicCalcActions.setPopupVisible(true))
    }


    return (
        <>
            <Box className={styles.wrapper} component="form" onSubmit={submitHandler}>
                <div className={styles.input_wrapper}>
                    <ThemeProvider theme={darkTheme}>
                        <Autocomplete
                            disablePortal
                            limitTags={0}
                            freeSolo
                            id="from"
                            onKeyDown={keyDownHandler}
                            options={
                                cities && direction === "from"
                                    ? cities.map((city: any) => city.FullName)
                                    : []
                            }
                            sx={{ width: "100%" }}
                            onInputChange={inputOnChangeHandler}
                            onChange={clickHandler}
                            renderInput={(params) => (
                                <TextField {...params} label="Откуда" id="from" />
                            )}
                        />
                    </ThemeProvider>
                </div>
                <div className={styles.input_wrapper}>
                    <ThemeProvider theme={darkTheme}>
                        <Autocomplete
                            disablePortal
                            limitTags={0}
                            freeSolo
                            id="to"
                            options={
                                cities && direction === "to"
                                    ? cities.map((city: any) => city.FullName)
                                    : []
                            }
                            sx={{ width: "100%" }}
                            onChange={clickHandler}
                            onInputChange={inputOnChangeHandler}
                            onKeyDown={keyDownHandler}
                            renderInput={(params) => (
                                <TextField {...params} label="Куда" id="to" />
                            )}
                        />
                    </ThemeProvider>
                </div>
               
                <ThemeProvider theme={darkTheme}>
                    <Button
                        variant="outlined"
                        type="submit"
                        sx={{ minWidth: "150px", height: '56px'}}
                        disabled={!validCity?.from || !validCity?.to}
                    >
                        ДАЛЕЕ
                    </Button>
                </ThemeProvider>
            </Box>
        </>
    );
};

export default FtlCalc;
