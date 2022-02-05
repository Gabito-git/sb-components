import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default{
    title: 'UI/MyLabel',                    // Lo guarda dentro del "directorio" UI en la pagina que renderiza storybook"
    component: MyLabel,                    // Este es el componente
    argTypes:{
        size: { control: 'select' },        // Cambia rl control a un select. tambien se le pueden pasar las opciones que se quieren mostrar. Aasi como está muestra todos los sizes
        color:{ control: 'select' },
        fontColor:{ control: 'color' }
    }
}as ComponentMeta<typeof MyLabel>


/*
    La idea acá es que storybook tenga acceso a las props del componente para que puedan
    ser editadas via su aplicación web
*/
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

/*
    Se hace una copia de Template con .bind para no mutarlo.
    Estas instrucciones son las que finalmente van a renderizar 
    mi componente en storybook. Se trata de variaciones del mismo, o páginas
*/

export const Basic = Template.bind({})    
Basic.args = {              // Arranca con el prop size seleccionado en normal
    size: "normal",
    allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: "normal",
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args={
    size: 'h1',
    fontColor: '#5517AC'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args={
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
}

