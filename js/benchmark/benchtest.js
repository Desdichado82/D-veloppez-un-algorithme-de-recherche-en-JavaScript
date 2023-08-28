

const recipes = [
    {
        "id": 1,
        "image": "Recette01.jpg",
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantity" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
    },
    {
        "id": 2,
        "image": "Recette02.jpg",
        "name" : "Poisson Cru à la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient" : "Thon Rouge (ou blanc)",
                "quantity" : 200,
                "unit" : "grammes"
            },
            {
                "ingredient" : "Concombre",
                "quantity" : 1
            },
            {
                "ingredient" : "Tomate",
                "quantity" : 2
            },
            {
                "ingredient" : "Carotte",
                "quantity" : 1
            },
            {
                "ingredient" : "Citron Vert",
                "quantity" : 5
            },
            {
                "ingredient" : "Lait de coco",
                "quantity" : 100,
                "unit" : "ml"
            }
        ],
        "time": 60,
        "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouvez ajouter 1 à 2 cuillères à soupe de Crème de coco",
        "appliance": "Saladier",
        "ustensils": ["presse citron"]
    },{
        "id": 3,
        "image": "Recette03.jpg",
        "name": "Poulet coco réunionnais",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poulet",
                "quantity" : 1          
            },
            {
                "ingredient": "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity" : 25,
                "unit" : "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity" : 1
            },
            {
                "ingredient": "Poivron rouge",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
               "unit": "cuillères à soupe"
            }
        ],
        "time": 80,
        "description": "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliance": "Cocotte",
        "ustensils": ["couteau"]
    },{
        "id": 4,
        "image": "Recette04.jpg",
        "name": "Salade de riz",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Riz blanc",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Thon en miettes",
                "quantity": 200,
                "unit": "grammes"
            },{
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf dur",
                "quantity": 2
            },
            {
                "ingredient": "Maïs",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 50,
        "description": "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
        "appliance": "Cuiseur de riz",
        "ustensils": ["saladier", "passoire"]
    },
    {
        "id": 5,
        "image": "Recette05.jpg",
        "name": "Tarte au thon",
        "servings": 4,
        "ingredients":[
           {
               "ingredient": "Pâte feuilletée",
               "quantity": 1 
           },
           {
               "ingredient": "Thon en miettes",
               "quantity": 130,
               "unit": "grammes"
           },
           {
                "ingredient": "Tomate",
                "quantity": 2
           },
           {
               "ingredient": "Crème fraîche",
               "quantity": 2,
               "unit": "cuillères à soupe"
           },
           {
               "ingredient": "gruyère râpé",
               "quantity": 100,
               "unit": "grammes"
           },
           {
                "ingredient": "Moutarde de Dijon",
                "quantity": 1,
                "unite": "cuillères à soupe"
           }
        ],
        "time": 45,
        "description": "Étaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
        "appliance":"Four",
        "ustensils": ["moule à tarte", "râpe à fromage", "couteau"]
    },
    {
        "id": 6,
        "image": "Recette06.jpg",
        "name": "Tarte aux pommes",
        "servings": 6,
        "ingredients":[
            {
                "ingredient": "Pâte brisée",
                "quantity": 1
            },
            {
                "ingredient": "Pomme",
                "quantity": 3
            },
            {
                "ingredient": "Oeuf",
                "quantity": "2"
            },
            {
                "ingredient":"Crème fraîche",
                "quantity":25,
                "unit": "cl"
            },
            {
                "ingredient": "Sucre en Poudre",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachets"

            }
        ],
        "time": 50,
        "description": "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finalement verser la préparation à base d'oeufs et de crème fraîche. Laisser cuire au four pendant 30 minutes",
        "appliance": "Four",
        "ustensils": ["moule à tarte", "saladier", "fourchette"]
    },{
        "id": 7,
        "image": "Recette07.jpg",
        "name": "Tartelettes au chocolat et aux fraises",
        "servings": 6,
        "ingredients":[
            {
                "ingredient": "Pâte sablée",
                "quantity": 1
            }, 
            {
                "ingredient": "Chocolat au lait",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème liquide",
                "quantity": 80,
                "unit": "cl"
            },
            {
                "ingredient": "Beurre",
                "quantity": "30",
                "unit": "grammes"
            },
            {
                "ingredient": "Fraise",
                "quantity": 6
            }
        ],
        "time": 50,
        "description": "Étaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
        "appliance":"Four",
        "ustensils":["moule à tartelettes (6)", "casserole"]
    }, {
        "id": 8,
        "image": "Recette08.jpg",
        "name": "Brownie",
        "servings": 10,
        "ingredients":[
           {
                "ingredient": "Noix",
                "quantity": "180",
                "unit": "grammes"
           },
           {
               "ingredient": "Chocolat noir",
               "quantity": 150,
               "unit": "grammes"
           },
           {
               "ingredient": "Beurre",
               "quantity": 120,
               "unit": "grammes"
           },
           {
                "ingredient": "Oeuf",
                "quantity": 2
           },
           {
               "ingredient": "Sucre en Poudre",
               "quantity": "110",
               "unit": "grammes"
           },
           {
                "ingredient": "farine",
                "quantity": 90,
                "unit": "grammes"
           }

        ], 
        "time": 60,
        "description": "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
        "appliance": "Four",
        "ustensils": ["moule à gateaux", "casserole"]
    },
    {
        "id": 9,
        "image": "Recette09.jpg",
        "name": "Salade Méditerannéene fraîche au chèvre",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Concombre",
                "quantity": 1
            },
            {
                "ingredient": "Olives"
            },
            {
                "ingredient": "Fromage de chèvre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Vinaigre Balsamic"
            },
            {
                "ingredient": "Huile d'olive"
            }, 
            {
                "ingredient": "Basilic"    
            }
        ],
        "time": 15,
        "description":"Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
        "appliance":"Saladier",
        "ustensils":["cuillère en bois", "couteau"]
    },
    {
        "id": 10,
        "image": "Recette10.jpg",
        "name": "Tartiflette",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Reblochon",
                "quantity": "1"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 4.5,
                "unit": "kg"
            },
            {
                "ingredient": "Jambon fumé",
                "quantity": 2,
                "unit": "tranches"
            },
            {
                "ingredient": "Oignon",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Vin blanc sec",
                "quantity": 30,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
        "appliance":"Four",
        "ustensils": ["plat à gratin", "couteau","Économe"]
    },{
        "id": 11,
        "image": "Recette11.jpg",
        "name": "Salade tomate, mozzarella et pommes",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Tomates cerises",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Jambon de parme",
                "quantity": 4,
                "unit": "tranches"
            }, 
            {
                "ingredient": "Pommes",
                "quantity": 1
            },
            {
                "ingredient": "Salade Verte",
                "quantity": 1
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
        "appliance": "Saladier",
        "ustensils": ["couteau", "cuillère à melon" ]
    },{
        "id": 12,
        "image": "Recette12.jpg",
        "name": "Compote pomme rhubarbe",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Rhubarbe",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Pommes",
                "quantity": 8
            },
            {
                "ingredient": "Sucre vanillé",
                "quantity": 6,
                "unit": "sachets"
            },
            {
                "ingredient": "Eau",
                "quantity" : "0.5",
                "unit" : "tasses"
            }
        ],
        "time": 40,
        "description": "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
        "appliance": "Casserole",
        "ustensils": ["couteau", "économe"]
    },
    {
        "id": 13,
        "image": "Recette13.jpg",
        "name": "Salade mâchée de patates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Mâche",
                "quantity": 60,
                "unit": "grammes"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Échalote",
                "quantity": 2

            },
            {
                "ingredient": "Vinaigre de cidre",
                "quantity": 1,
                "unit":"cuillère à soupe"
            },
            {
                "ingredient": "huile d'olive",
                "quantity": 2,
                "unit": "cuillère à soupe"
            }
        ],
        "time":40,
        "description":"Cuire les pommes de terre environ 30 minutes. Découper les échalotes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
        "appliance": "Casserole",
        "ustensils":["couteau","saladier","cuillère en bois"]
    },
    {
        "id": 14,
        "image": "Recette14.jpg",
        "name": "Galette Bretonne Saucisse et Fromage à raclette",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Saucisse bretonne ou de Toulouse",
                "quantity": 2
            },
            {
                "ingredient": "Farine de blé noir",
                "quantity": 130,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1

            },
            {
                "ingredient": "Fromage à raclette",
                "quantity": 300,
                "unit":"grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 75,
                "unit": "grammes"
            }

        ],
        "time": 100,
        "description":"Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
        "appliance": "Four",
        "ustensils":["poêle à frire","couteau"]
    },
    {
        "id": 15,
        "image": "Recette15.jpg",
        "name": "Crêpes Chocolat Banane",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Lait",
                "quantity": 600,
                "unit": "ml"
            },
            {
                "ingredient": "Beurre salé",
                "quantity": 30,
                "unit":"grammes"
            },
            {
                "ingredient": "Chocolat au lait",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Banane",
                "quantity": 4
            }
        ],
        "time": 60,
        "description":"Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
        "appliance": "Poêle à crêpe",
        "ustensils":["saladier", "louche", "cuillère en bois"]
    },
    {
        "id": 16,
        "image": "Recette16.jpg",
        "name": "Gratin de pâtes à la tomate",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Pennes",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Basilic",
                "quantity": 1,
                "unit":"tiges"
            },
            {
                "ingredient": "huile d'olives",
                "quantity": 2,
                "unit": "cuillère à soupe"
            }
        ],
        "time": 45,
        "description":"Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
        "appliance": "Four",
        "ustensils":["plat à gratin", "couteau", "râpe à fromage"]
    },
    {
        "id": 17,
        "image": "Recette17.jpg",
        "name": "Smoothie à la fraise",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Fraise",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Pastèque",
                "quantity": 0.5
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit":"cuillères à soupe"
            },
            {
                "ingredient": "Glaçons",
                "quantity": 8
            },
            {
                "ingredient": "Menthe"
            }
        ],
        "time": 15,
        "description":"Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillère à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques feuilles de menthe pour plus de fraîcheur. Mixez le tout. Servir et déguster.",
        "appliance": "Blender",
        "ustensils":["verres", "couteau", "presse citron"]
    },
    {
        "id": 18,
        "image": "Recette18.jpg",
        "name": "Smoothie ananas et vanille",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Ananas",
                "quantity": 1
            },
            {
                "ingredient": "Glace à la vanille",
                "quantity": 500,
                "unit": "ml"
            },
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description":"Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
        "appliance": "Blender",
        "ustensils":["verres", "couteau"]
    },
    {
        "id": 19,
        "image": "Recette19.jpg",
        "name": "Shake Banane Kiwi",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Kiwi",
                "quantity": 4
            },
            {
                "ingredient": "Citron",
                "quantity": 1
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 30,
                "unit":"grammes"
            },
            {
                "ingredient": "Banane",
                "quantity": 1
            }
        ],
        "time": 0,
        "description":"Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
        "appliance": "Blender",
        "ustensils":["couteau", "verres", "presse citron"]
    },
    {
        "id": 20,
        "image": "Recette20.jpg",
        "name": "Pates Carbonara",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Tagliatelles",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Parmesan",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "huile d'olive",
                "quantity": 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 30,
        "description":"Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
        "appliance": "Sauteuse",
        "ustensils":["râpe à fromage", "cuillère en bois"]
    },
    {
        "id": 21,
        "image": "Recette21.jpg",
        "name": "Spaghettis à la bolognaise",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Spaghettis",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 2
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity": 300,
                "unit":"grammes"
            },
            {
                "ingredient": "Viande hachée 1% de matière grasse",
                "quantity": 400,
                "unit":"grammes"
            },
            {
                "ingredient": "Vin rouge",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity" : 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 30,
        "description":"Cuisiner la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oignons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraîche à la viande hachée. Servir.",
        "appliance": "Casserole",
        "ustensils":["Cuillère en bois", "louche", "couteau"]
    },
    {
        "id": 22,
        "image": "Recette22.jpg",
        "name": "Fondant au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Beurre",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            }
        ],
        "time": 30,
        "description":"Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert.",
        "appliance": "Four",
        "ustensils":["moule à gateaux", "fouet", "casserole"]
    },
    {
        "id": 23,
        "image": "Recette23.jpg",
        "name": "Quiche lorraine",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pâte brisée",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Crème Fraîche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Lait",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description":"Étaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
        "appliance": "Four",
        "ustensils":["moule à gateaux", "rouleau à patisserie", "fouet"]
    },
    {
        "id": 24,
        "image": "Recette24.jpg",
        "name": "Salade de pâtes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Thon en miettes",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Maïs",
                "quantity": 60,
                "unit": "grammes"
            },
            {
                "ingredient": "Tomate",
                "quantity": 1
            },
            {
                "ingredient": "Concombre",
                "quantity": 0.5
            },
            {
                "ingredient": "Macaronis",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Mayonnaise",
                "quantity": 2,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 40,
        "description":"Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
        "appliance": "Saladier",
        "ustensils":["couteau", "cuillère en bois"]
    },
    {
        "id": 25,
        "image": "Recette25.jpg",
        "name": "Cookies",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir en pépites",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            }
        ],
        "time": 30,
        "description":"Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumeaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
        "appliance": "Four",
        "ustensils":["fouet", "saladier", "plaque de cuisson"]
    },
    {
        "id": 26,
        "image": "Recette26.jpg",
        "name": "Soupe de tomates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olives"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            }
        ],
        "time": 25,
        "description":"Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
        "appliance": "Mixer",
        "ustensils":["cocotte minute", "couteau"]
    },
    {
        "id": 27,
        "image": "Recette27.jpg",
        "name": "Soupe à l'oseille",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oseille",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 4,
                "unit": "cuillère à soupe"
            },
            {
                "ingredient": "Vermicelles",
                "quantity": 1,
                "unit":"verres"
            },
            {
                "ingredient": "Beurre salé",
                "quantity": 50,
                "unit": "grammes"
            }
        ],
        "time": 15,
        "description":"Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
        "appliance": "Casserole",
        "ustensils":["couteau","cuillère en bois"]
    },
    {
        "id": 28,
        "image": "Recette28.jpg",
        "name": "Soupe de poireaux",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poireau",
                "quantity": 3
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oseille",
                "quantity": 75,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit":"grammes"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 10,
                "unit": "cl"
            }
        ],
        "time": 80,
        "description":"Émincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
        "appliance": "Mixer",
        "ustensils":["casserole","couteau"]
    },
    {
        "id": 29,
        "image": "Recette29.jpg",
        "name": "Houmous Express",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pois chiches",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            },
            {
                "ingredient": "Citron",
                "quantity": 2
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Paprika"
            }
        ],
        "time": 30,
        "description":"Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
        "appliance": "Mixer",
        "ustensils":["cuillère en bois", "presse citron"]
    },
    {
        "id": 30,
        "image": "Recette30.jpg",
        "name": "Purée de pois cassés",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pois Cassé",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 2,
                "unit": "gousses"
            }
        ],
        "time": 60,
        "description":"Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuire à petit feu pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
        "appliance": "Mixer",
        "ustensils":["casserole", "cuillère en bois"]
    },
    {
        "id": 31,
        "image": "Recette31.jpg",
        "name": "Jardinière de légumes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 2
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 2
            },
            {
                "ingredient": "Haricots verts",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Petits poids",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description":"Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
        "appliance": "Poêle",
        "ustensils":["Couteau", "économe"]
    },
    {
        "id": 32,
        "image": "Recette32.jpg",
        "name": "Croque Monsieur à la dinde",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Blanc de dinde",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Emmental",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Gruyère",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Lait",
                "quantity": 5,
                "unit": "cl"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pincées"
            }
        ],
        "time": 20,
        "description":"Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d’emmental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieur. Placer au four durant 10 minutes.",
        "appliance": "Four",
        "ustensils":["râpe à fromage", "cuillère à Soupe", "couteau"]
    },
    {
        "id": 33,
        "image": "Recette33.jpg",
        "name": "Sandwich au saumon fumé",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Saumon Fumé",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Feuilles de laitue",
                "quantity": 4
            },
            {
                "ingredient": "Fromage blanc",
                "quantity": 4,
                "unit":"cuillères à soupe"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 5,
        "description":"Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
        "appliance": "Four",
        "ustensils":["couteau", "cuillère en bois"]
    }
];

class Recette{
    constructor(item){
        this._id = item.id
        this._image = item.image
        this._name = item.name
        this._servings = item.servings
        this._ingredients = item.ingredients
        this._time = item.time
        this._description = item.description
        this._appliance = item.appliance
        this._ustensils = item.ustensils

        // Process ingredients data 
        this.processIngredients();
    }

    get id(){
        return this._id
    }

    get image(){
        return `resources/img/reciepes/les_petits_plats/${this._image}`
    }

    get name(){
        return this._name
    }

    get servings(){
        return this._servings
    }
    get ingredients(){
        return this._ingredients
    }
   

    get time(){
        return this._time
    }

    get description(){
        return this._description
    }

    get appliance(){
        return this._appliance
    }
    get ustensils(){
        return this._ustensils
    }

    processIngredients(){
        this._ingredientsList = this.ingredients.map(ingredient =>({
            ingredient:ingredient.ingredient,
            quantity: ingredient.quantity,
            unit: ingredient.unit || " ",

        }));
    }

    get ingredientList(){
        return this._ingredientsList;
    }


}




const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

function searchRecipesFunctional(searchTerm) {
    const filteredRecipes = recipes.filter(item => {
      const recette = new Recette(item);
      const recipeName = recette.name.toLowerCase();
      const description = recette.description.toLowerCase();
      const ingredientListMatches = recette.ingredientList.some(ingredientItem =>
        ingredientItem.ingredient.toLowerCase().includes(searchTerm)
      );
  
      return recipeName.includes(searchTerm) || ingredientListMatches || description.includes(searchTerm);
    });
  
    return filteredRecipes;
  }

function searchRecipesImperative(searchTerm) {
    const filteredRecipes = [];
  
    for (let i = 0; i < recipes.length; i++) {
      const recette = new Recette(recipes[i]);
      const recipeName = recette.name.toLowerCase();
      const description = recette.description.toLowerCase();
      let ingredientListMatches = false;
  
      for (let j = 0; j < recette.ingredientList.length; j++) {
        const ingredient = recette.ingredientList[j].ingredient.toLowerCase();
        if (ingredient.includes(searchTerm)) {
          ingredientListMatches = true;
          break;
        }
      }
  
      if (recipeName.includes(searchTerm) || ingredientListMatches || description.includes(searchTerm)) {
        filteredRecipes.push(recipes[i]);
      }
    }
  
    return filteredRecipes;
}

// Add benchmarks
suite.add('Imperative', function() {
    searchRecipesImperative('limonade'); // Replace 'limonade' with the search term you want to test
})
.add('Functional', function() {
    searchRecipesFunctional('limonade'); // Replace 'limonade' with the search term you want to test
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Results for Imperative:', suite[0].hz + ' ops/sec');
    console.log('Results for Functional:', suite[1].hz + ' ops/sec');
})
.run({ 'async': true });

