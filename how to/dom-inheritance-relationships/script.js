"use strict";

const allConstructors = Object.entries(Object.getOwnPropertyDescriptors(globalThis))
    .filter(([_, { value }]) => value !== Object && typeof value === "function" && value.hasOwnProperty("prototype")),
    classInheritanceTree = new Map([
        [
            null,
            new Map([
                [
                    Object,
                    new Map()
                ]
            ])
        ]
    ]),
    classInheritanceReferences = new Map([
        [null, classInheritanceTree.get(null)],
        [Object, classInheritanceTree.get(null).get(Object)]
    ]),
    constructorNames = new Map([
        [
            null,
            new Set([
                "null"
            ])
        ],
        [
            Object,
            new Set([
                "Object"
            ])
        ]
    ]),
    visualizeTree = (map, names) => Array.from(map)
        .map(([constructor, subMap]) => {
            const listItem = document.createElement("li");
            const listItemLabel = document.createElement("span");

            listItemLabel.append(...Array.from(names.get(constructor))
                .flatMap((textContent) => {
                    var link = document.createElement("a");
                    link.target = "_blank";
                    if ((textContent != "null") && (textContent != "Object")) {
                        link.href = `https://developer.mozilla.org/en-US/docs/Web/API/${textContent}`;
                    }
                    return [
                        Object.assign(link, {
                            textContent
                        }),
                        ", "
                    ];
                })
                .slice(0, -1));

            listItem.append(listItemLabel);

            if (subMap.size) {
                const subList = document.createElement("ul");

                var span = document.createElement("span");
                var text = document.createTextNode("▼");
                span.appendChild(text);
                span.setAttribute("class", "marker");
                listItem.prepend(span);

                listItem.setAttribute("data-collapsed", "false");
                listItem.append(subList);
                subList.append(...visualizeTree(subMap, names));
            }

            return listItem;
        })
        .sort((listItemA, listItemB) => listItemB.hasAttribute("data-collapsed") - listItemA.hasAttribute("data-collapsed") || listItemA.textContent.localeCompare(listItemB.textContent));

allConstructors.forEach(function populateInheritanceTree([name, { value }]) {
    const superClass = Object.getPrototypeOf(value.prototype).constructor;

    if (!classInheritanceReferences.has(superClass)) {
        populateInheritanceTree([
            superClass.name,
            {
                value: superClass
            }
        ]);
    }

    if (!classInheritanceReferences.has(value)) {
        const subClasses = new Map();

        classInheritanceReferences
            .set(value, subClasses)
            .get(superClass)
            .set(value, subClasses);
    }

    if (!constructorNames.has(value)) {
        constructorNames.set(value, new Set());
    }

    constructorNames.get(value)
        .add(name);

    if (value.name) {
        constructorNames.get(value)
            .add(value.name);
    }
});
document.body.appendChild(document.createElement("ul"))
    .append(...visualizeTree(classInheritanceTree, constructorNames));

var markers = document.getElementsByClassName("marker");
for (let i = 0; i < markers.length; i++) {
    markers[i].addEventListener("click", ({ target }) => {
        if (target.closest("span") && target.closest("li").hasAttribute("data-collapsed")) {
            if (target.closest("li").getAttribute("data-collapsed") == "false") {
                console.log('hi');
                target.closest("span").textContent = "▶";
                target.closest("li").setAttribute("data-collapsed", "true");
            } else {
                target.closest("span").textContent = "▼";
                target.closest("li").setAttribute("data-collapsed", "false");
            }

        }
    });
}

