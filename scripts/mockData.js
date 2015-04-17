export default [{
    "id": 0,
    "name": "root",
    "parentId": null,
    "children": [{
        "id": 1,
        "name": "A",
        "parentId": 1
    }, {
        "id": 2,
        "name": "B",
        "parentId": 1,
        "children": [{
            "id": 3,
            "name": "C",
            "parentId": 2
        }, {
            "id": 4,
            "name": "D",
            "parentId": 2,
            "children": [{
                "id": 5,
                "name": "E",
                "parentId": 4
            }]
        }, {
            "id": 6,
            "name": "F",
            "parentId": 2,
            "children": [{
                "id": 7,
                "name": "G",
                "parentId": 4
            }]
        }]
    }]
}];
