
import './mylabel.css'

/*
    Estas Props son empleadas por storybook para hacerlas editables
    a través de la aplicación web que corre con npm start. Tambien los usa para crear
    la documentación del componente, indicando que valores se les pueden pasar. Los comentarios
    que se le pasan a los props, son mostrados por storybook en la pestaña de documentación. Para hacer 
    lo mismo en javascript, se deben emplear los PropTypes
 */
export interface MyLabelProps{
    /**
      *Texto que será mostrado
     */
    label: string;
    /**
      *Tamaño de fuente a emplear
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
      *Texto capitalizado
     */
    allCaps?: boolean;
    /**
      *Color del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
      *Color del texto personalizado
     */
    fontColor?: string
}

/*
    A pesar de que label y size son obligatorios, en los props se establece 
    un valor por defecto el cual es mostrado por storybook. Esto debido a que
    el usuario, al iniciar, aun no indica ningún valor
*/

export const MyLabel = ({ 
    allCaps = false,
    color   = 'primary',
    label   = 'No label', 
    size    = 'normal',
    fontColor
}: MyLabelProps) => {
  return <span 
            className={`label ${size} text-${color}` } 
            style={{ color: fontColor }}
          >
            { allCaps ? label.toUpperCase(): label }
        </span>;
};

