export default function deliveryDate() {
    const currentDate = new Date();
    // Mock delivery date by adding 2 days
    currentDate.setDate(currentDate.getDate() + 2);

    const day = currentDate.getDate().toString().padStart(2, '0'); 
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();

    return(
        <>
            <p className="delivery">Fragt PostNord forventet levering {day}-{month}-{year}</p>
        </> 
    )     
}


    