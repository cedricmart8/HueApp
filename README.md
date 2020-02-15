# HueApp
### Les attributs de lumière suivants sont disponibles :

<br/><em>id</em> - Identification numérique du feu tel qu'il est enregistré sur le pont
<br/><em>name</em> - Nom configurable pour la lumière
<br/><em>type</em> - Type de lumière (par exemple, lumière colorée étendue, lumière tamisée)
<br/><em>uniqueId</em> - Id unique de la lumière
<br/><em>fabricant</em> - Nom du fabricant
<br/><em>modelId</em> - Modèle Id de la lumière, utilisé pour déterminer le LightModel
<br/><em>model</em> - Un objet LightModel, contenant des détails sur le modèle (non disponible dans les autres clients Node.js !)
<br/><em>productId</em> - Modèle de matériel d'identification unique (Remarque : non disponible pour toutes les lumières)
<br/><em>softwareVersion</em> - Version logicielle de la lumière
<br/><em>softwareConfigId</em> - ID de configuration du logiciel de la lumière (Note : non disponible pour toutes les lumières)

## L'état lumineux suivant est disponible :

<br/><em>on</em> - vrai si la lumière est allumée, faux sinon, configurable
<br/><em>reachable</em>  - vrai si la lumière peut être communiquée, faux si elle ne l'est pas
<br/><em>brightness</em>  - Luminosité configurable de la lumière (valeur de 0 à 254)
<br/><em>saturation</em> - Saturation configurable de la lumière, complémente la teinte (valeur de 0 à 254)
<br/><em>xy</em> - Coordonnées CIE x et y configurables (la valeur est un tableau contenant les valeurs x et y)
<br/><em>colorTemp</em> - Température de couleur de la lumière configurable (valeur de 153 à 500)
<br/><em>transitionTime</em> - Valeur temporaire configurable qui facilite la transition d'un effet (valeur en secondes, 0 pour l'instant, 5 pour cinq secondes)
<br/><em>alert</em> - Effet d'alerte configurable (par exemple, aucun, sélectionner, lselect)
<br/><em>effect</em> - Effet configurable (par exemple, aucun, boucle de couleur)

## Il existe des propriétés supplémentaires d'état de lumière disponibles pour l'incrémentation et la décrémentation des valeurs :

<br/><em>incrementBrightness</em> - Augmenter ou diminuer la valeur de luminosité
<br/><em>incrementHue</em> - Valeur de la teinte incrémentale ou décrémentale
<br/><em>incrementSaturation</em> - Valeur de saturation croissante ou décroissante
<br/><em>incrementXy</em> - Augmenter ou diminuer les valeurs xy
<br/><em>incrementColorTemp</em> - Augmenter ou diminuer la valeur de la température de couleur

## Huejay est le seul client de Node.js qui maintient une liste des modèles Philips Hue supportés. L'attribut Light model renvoie un objet LightModel qui contient des détails supplémentaires sur le modèle :

<br/><em>id</em> - Model Id, généralement la même valeur que Light modelId
<br/><em>manufacturer</em>  - Fabricant, généralement de la même valeur que le fabricant de luminaires
<br/><em>name</em> - Nom du modèle / produit (par exemple, Hue Spot GU10)
<br/><em>type</em> - Type de lumière, généralement la même valeur que le type de lumière
<br/><em>colorGamut</em> - La gamme de couleurs supportée par la lumière
<br/><em>friendsOfHue</em> - vrai si Amis de Hue, faux si non