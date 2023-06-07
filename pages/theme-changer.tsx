import { Layout } from "@/components/layouts";
import {Card,CardContent,FormControl, FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material';
import { ChangeEvent, useState } from "react";

const ThemeChangerPage = () => {

  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = (e:ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value;
    setCurrentTheme(selectedTheme);
  }

  return (
    <Layout>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Tema</FormLabel>
                    <RadioGroup value={currentTheme} onChange={onThemeChange}>
                        <FormControlLabel value='light' control={<Radio/>} label='Light'/>
                        <FormControlLabel value='dark' control={<Radio/>} label='Dark'/>
                        <FormControlLabel value='custom' control={<Radio/>} label='Custom'/>
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    </Layout>
  )
}

export default ThemeChangerPage;