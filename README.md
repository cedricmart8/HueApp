# HueApp
### Les attributs de lumière suivants sont disponibles :

<em> id </em>  - Identification numérique du feu tel qu'il est enregistré sur le pont
<em> name </em>- Nom configurable pour la lumière
type - Type de lumière (par exemple, lumière colorée étendue, lumière tamisée)
uniqueId - Id unique de la lumière
fabricant - Nom du fabricant
modelId - Modèle Id de la lumière, utilisé pour déterminer le LightModel
model - Un objet LightModel, contenant des détails sur le modèle (non disponible dans les autres clients Node.js !)
productId - Modèle de matériel d'identification unique (Remarque : non disponible pour toutes les lumières)
softwareVersion - Version logicielle de la lumière
softwareConfigId - ID de configuration du logiciel de la lumière (Note : non disponible pour toutes les lumières)

## L'état lumineux suivant est disponible :

on - vrai si la lumière est allumée, faux sinon, configurable
reachable  - vrai si la lumière peut être communiquée, faux si elle ne l'est pas
brightness  - Luminosité configurable de la lumière (valeur de 0 à 254)
colorMode - La lumière en mode couleur est respectueuse (par exemple ct, xy, hs)
hue  - Teinte de la lumière configurable (valeur de 0 à 65535)
saturation - Saturation configurable de la lumière, complémente la teinte (valeur de 0 à 254)
xy - Coordonnées CIE x et y configurables (la valeur est un tableau contenant les valeurs x et y)
colorTemp - Température de couleur de la lumière configurable (valeur de 153 à 500)
transitionTime - Valeur temporaire configurable qui facilite la transition d'un effet (valeur en secondes, 0 pour l'instant, 5 pour cinq secondes)
alert - Effet d'alerte configurable (par exemple, aucun, sélectionner, lselect)
effect - Effet configurable (par exemple, aucun, boucle de couleur)

## Il existe des propriétés supplémentaires d'état de lumière disponibles pour l'incrémentation et la décrémentation des valeurs :

incrementBrightness - Augmenter ou diminuer la valeur de luminosité
incrementHue - Valeur de la teinte incrémentale ou décrémentale
incrementSaturation - Valeur de saturation croissante ou décroissante
incrementXy - Augmenter ou diminuer les valeurs xy
incrementColorTemp - Augmenter ou diminuer la valeur de la température de couleur

## Huejay est le seul client de Node.js qui maintient une liste des modèles Philips Hue supportés. L'attribut Light model renvoie un objet LightModel qui contient des détails supplémentaires sur le modèle :

id - Model Id, généralement la même valeur que Light modelId
manufacturer  - Fabricant, généralement de la même valeur que le fabricant de luminaires
name - Nom du modèle / produit (par exemple, Hue Spot GU10)
type - Type de lumière, généralement la même valeur que le type de lumière
colorGamut - La gamme de couleurs supportée par la lumière
friendsOfHue - vrai si Amis de Hue, faux si non
