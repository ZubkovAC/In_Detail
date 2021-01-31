import React from "react";
import {FormControl, InputLabel, MenuItem, Select, makeStyles, Theme, createStyles} from "@material-ui/core";

type ItemType = {
    title: string
    value: any
}

export type RatingTypeProps = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);



export function SelectTest(props: RatingTypeProps) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        console.log(event)
        setAge(event.target.value as string);
    };
    const selsectedItem = props.items.find(i => i.value===props.value)
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{selsectedItem}</InputLabel>
                    <Select labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}>
                        {props.items.map((i, index) => <MenuItem value={i.title} key={index}>{i.title}</MenuItem>)}
                    </Select>
            </FormControl>
        </div>
    )
}



