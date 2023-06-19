
export default function ListButton({name, styleName, handleClick}){

    return(
        <button className={styleName} onClick={handleClick}>{name}</button>
    );
};