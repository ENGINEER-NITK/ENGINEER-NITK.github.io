export const FormatDate = (dateEdited) => {
    const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    let date = new Date(dateEdited);
    let datefr = jours[date.getDay()] + " "; // nom du jour
    datefr += date.getDate() + " "; // numero du jour
    datefr += mois[date.getMonth()] + " "; // mois
    datefr += date.getFullYear();
    return datefr;
}
