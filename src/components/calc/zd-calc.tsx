"use client";
import React, { useEffect } from "react";
import styles from "./zd-calc.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { actions as basicCalcActions } from "@/redux/basic-calc-slice/basic-calc.slice";
import { actions as zdCalcActions } from "@/redux/zd-calc-slice/zd-calc.slice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    useGetFescoLoactionsDataQuery,
    useGetFescoValidToLoactionsDataQuery
} from "@/api/api";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { carTypes } from "@/utils/constants";
import { TFescoLocations } from "@/utils/types";
import { useDispatch } from "react-redux";

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

const ZdCalc: React.FC = () => {
    const dispatch = useAppDispatch();
    const { validLocFrom, validLocTo, locToList } = useAppSelector(
        (store) => store.zdCalc
    );

    const cachedValidLocFrom = React.useMemo(() => validLocFrom, [ validLocFrom ]);
    
    const { data: filteredData } = useGetFescoLoactionsDataQuery(null);
    
    
    const locFromSelectHandler = async (e: any) => {
        dispatch(zdCalcActions.setLocFromValue(e.target.textContent));
        const validLocFrom = filteredData?.filter(
            (item) => item.loc_name === e.target.textContent
        )[0];
        dispatch(zdCalcActions.setValidLocFromValue(validLocFrom));
    };

    const locToSelectHandler = (e: any) => {
        dispatch(zdCalcActions.setLocToValue(e.target.textContent));
        const validLocTo = filteredData?.filter(
            (item) => item.loc_name === e.target.textContent
        )[0];
        dispatch(zdCalcActions.setValidLocToValue(validLocTo));
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(basicCalcActions.setPopupVisible(true));
    }

    return (
        <>
            
                <Box className={styles.wrapper} component="form" onSubmit={submitHandler}>
                    <div className={styles.input_wrapper}>
                        <ThemeProvider theme={darkTheme}>
                            <Autocomplete
                                disablePortal
                                freeSolo
                                limitTags={0}
                                ListboxProps={{ id: "from" }}
                                id="from"        
                                options={filteredData ? filteredData.map((item: TFescoLocations) => item.loc_name) : []}
                                sx={{ width: "100%" }}
                                onChange={locFromSelectHandler}
                                disabled={!filteredData}
                                renderInput={(params) => (
                                    <TextField {...params} label="Откуда" id="from" />
                                )}
                            />
                        </ThemeProvider>
                    </div>
                    <div className={styles.input_wrapper}>
                        <LocToInput from={cachedValidLocFrom} />
                        {/*}
                        <ThemeProvider theme={darkTheme}>
                            <Autocomplete
                                disablePortal
                                freeSolo
                                limitTags={0}
                                id="to"
                                options={filteredData ? filteredData.map((item: TFescoLocations) => item.loc_name) : []}
                                sx={{ width: "100%" }}
                                onChange={locToSelectHandler}
                                disabled={!filteredData}
                                renderInput={(params) => (
                                    <TextField {...params} label="Куда" id="to" />
                                )}
                            />
                                </ThemeProvider>*/}
                    </div>
                    {/*
                <div className={styles.input_wrapper}>
                    <ThemeProvider theme={darkTheme}>
                        <FormControl fullWidth>
                            <TextField
                                select
                                id="carTypesSelect"
                                label="Тип контейнера"
                                onChange={carTypeChangeHandler}
                            >
                                {carTypes.map((item, index) => (
                                    <MenuItem key={index} id={item.name} value={item.name}>{item.placeholder}</MenuItem>
                                ))}
                            </TextField>
                            </FormControl>
                        </ThemeProvider>
                </div>
                */}
                    <ThemeProvider theme={darkTheme}>
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{ minWidth: "150px", height: "56px" }}
                            disabled={!validLocFrom || !validLocTo}
                        >
                            ДАЛЕЕ
                        </Button>
                    </ThemeProvider>
                </Box>
            
        </>
    );
};

export default ZdCalc;



const LocToInput: React.FC<{ from?: TFescoLocations }> = ({ from }) => {

    const dispatch = useDispatch();
    const { data } = useGetFescoValidToLoactionsDataQuery({ from: from ? from.loc_uid : ''}, { refetchOnMountOrArgChange: true, refetchOnFocus: true})

    const locToSelectHandler = (e: any) => {
        dispatch(zdCalcActions.setLocToValue(e.target.textContent));
        const validLocTo = data?.filter(
            (item) => item.loc_name === e.target.textContent
        )[0];
        dispatch(zdCalcActions.setValidLocToValue(validLocTo));
    };

    return (
                        <ThemeProvider theme={darkTheme}>
                            <Autocomplete
                                disablePortal
                                freeSolo
                                limitTags={0}
                                id="to"
                                options={data ? data.map((item: TFescoLocations) => item.loc_name) : []}
                                sx={{ width: "100%" }}
                                onChange={locToSelectHandler}
                                disabled={!data}
                                renderInput={(params) => (
                                    <TextField {...params} label="Куда" id="to" />
                                )}
                            />
                        </ThemeProvider>
    )
}
