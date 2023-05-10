import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnimalCaresPage = ({ route }) => {
    // Cette structure JSON correspond à la liste des soins disponibles pour chaque type d'animal
    const careDetails = {
        cat: {
            day_care: {
                "regular_day_care": "Information sur la garde de chat régulière",
                "overnight_day_care": "Information sur la garde de chat de nuit"
            },
            grooming: {
                "cut": "Information sur la coupe de poil pour chat",
                "bath": "Information sur le bain et les soins de peau pour chat",
                "nail_clipping": "Information sur la coupe des griffes pour chat",
                "dental_care": "Information sur les soins dentaires pour chat"
            },
            vaccination: {
                "core_vaccines": "Information sur les vaccins de base pour chat",
                "non_core_vaccines": "Information sur les vaccins recommandés pour chat en fonction de son mode de vie et de son environnement"
            },
            operation: {
                "spay_neuter": "Information sur la stérilisation/castration de chat",
                "emergency_surgery": "Information sur les opérations d'urgence pour chat",
                "orthopedic_surgery": "Information sur les opérations orthopédiques pour chat",
                "soft_tissue_surgery": "Information sur les opérations de tissus mous pour chat"
            },
            pet_shop: {
                "food": "Information sur l'alimentation pour chat",
                "toys": "Information sur les jouets pour chat",
                "bedding": "Information sur la literie pour chat",
                "accessories": "Information sur les accessoires pour chat"
            },
            anti_flow: {
                "flea_prevention": "Information sur la prévention des puces pour chat",
                "tick_prevention": "Information sur la prévention des tiques pour chat",
                "worming": "Information sur la vermifugation pour chat"
            }
        },
        dog: {
            day_care: {
                "regular_day_care": "Information sur la garde de chien régulière",
                "overnight_day_care": "Information sur la garde de chien de nuit"
            },
            grooming: {
                "hair_cut": "Information sur la coupe de poil pour chien",
                "bath": "Information sur le bain et les soins de peau pour chien",
                "nail_clipping": "Information sur la coupe des griffes pour chien",
                "teeth_cleaning": "Information sur le nettoyage des dents pour chien"
            },
            vaccination: {
                "core_vaccines": "Information sur les vaccins de base pour chien",
                "non_core_vaccines": "Information sur les vaccins recommandés pour chien en fonction de son mode de vie et de son environnement"
            },
            operation: {
                "neutering_spaying": "Information sur la stérilisation/castration de chien",
                "emergency_surgery": "Information sur les opérations d'urgence pour chien",
                "orthopedic_surgery": "Information sur les opérations orthopédiques pour chien",
                "soft_tissue_surgery": "Information sur les opérations de tissus mous pour chien"
            },
            pet_shop: {
                "food": "Information sur l'alimentation pour chien",
                "toys": "Information sur les jouets pour chien",
                "bedding": "Information sur la literie pour chien",
                "accessories": "Information sur les accessoires pour chien"
            },
            anti_flow: {
                "flea_and_tick_prevention": "Information sur la prévention des puces et tiques pour chien",
                "worming": "Information sur la vermifugation pour chien"
            },
        },
        bird: {
            day_care: {
                "regular_day_care": "Information sur la garde d'oiseaux régulière",
                "overnight_day_care": "Information sur la garde d'oiseaux de nuit"
            },
            grooming: {
                "feather_trimming": "Information sur la coupe de plumes d'oiseaux",
                "beak_and_nail_trimming": "Information sur la coupe de becs et d'ongles d'oiseaux",
                "bath": "Information sur le bain et les soins de peau pour oiseaux"
            },
            vaccination: {
                "core_vaccines": "Information sur les vaccins de base pour oiseaux",
                "non_core_vaccines": "Information sur les vaccins recommandés pour oiseaux en fonction de leur mode de vie et de leur environnement"
            },
            operation: {
                "emergency_surgery": "Information sur les opérations d'urgence pour oiseaux",
                "orthopedic_surgery": "Information sur les opérations orthopédiques pour oiseaux",
                "soft_tissue_surgery": "Information sur les opérations de tissus mous pour oiseaux"
            },
            pet_shop: {
                "food": "Information sur l'alimentation pour oiseaux",
                "toys": "Information sur les jouets pour oiseaux",
                "bedding": "Information sur la literie pour oiseaux",
                "accessories": "Information sur les accessoires pour oiseaux"
            },
            anti_flow: {
                "anti-parasite_treatment": "Information sur le traitement anti-parasite pour oiseaux"
            },
        },
        fish: {
            day_care: {
                "regular_day_care": "Information sur la garde de poisson régulière",
                "overnight_day_care": "Information sur la garde de poisson de nuit"
            },
            grooming:  {
                "aquarium_setup": "Information sur la mise en place de l'aquarium",
                "aquarium_cleaning": "Information sur le nettoyage de l'aquarium",
                "water_quality_management": "Information sur la gestion de la qualité de l'eau"
            },
            vaccination: {
                "feeding_schedule": "Information sur la planification de l'alimentation",
                "types_of_food": "Information sur les différents types de nourriture pour poisson"
            },
            operation: {
                "disease_prevention": "Information sur la prévention des maladies pour poisson",
                "disease_treatment": "Information sur le traitement des maladies pour poisson"
            },
            pet_shop: {
                "fish_food": "Information sur la nourriture pour poisson",
                "aquarium_accessories": "Information sur les accessoires d'aquarium",
                "fish_tank": "Information sur le réservoir de poisson",
                "water_conditioners": "Information sur les conditionneurs d'eau pour poisson"
            },
            anti_flow: {
                "anti-parasite_treatment": "Information sur le traitement anti-parasite pour poisson"
            },
        }
    };


    const { animal, care } = route.params;

    // Vérifiez si l'animal sélectionné a des soins disponibles
    if (!careDetails[animal]) {
        return (
            <View>
                <Text style={styles.title}>Aucun soin disponible pour cet animal</Text>
            </View>
        );
    }
    const careInfo = careDetails[animal][care.toLowerCase().replace(' ', '_')];
    const careSubDetails = Object.entries(careInfo).map(([subDetail, info]) => (
        <View key={subDetail} style={styles.subDetail}>
            <Text style={styles.subDetailTitle}>{subDetail.replace(/_/g, ' ')}</Text>
            <Text style={styles.subDetailTxt}>{info}</Text>
        </View>
    ));

    return (
        <View>
            <Text style={styles.title}>{care.charAt(0).toUpperCase() + care.slice(1)}</Text>
            {careSubDetails}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    subDetail: {
        marginBottom: 20,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    subDetailTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 18,
    },
    subDetailTxt: {
        textAlign: 'center',
    },
});

export default AnimalCaresPage;
