export const routes = [
    {
        "name": "Dashboard",
        "icon": "dashboard",
        "link": "dashboard",
        "pages": []
    },
    {
        "name": "People Management",
        "iconActive": "routes",
        "iconInActive": "routes-inactive",
        "link": "routes",
        "pages": [
            {
                "name": "Students",
                "link": "students",
                "id": "students"
            },
            {
                "name": "Teachers",
                "link": "teachers",
                "id": "teachers"
            },
            {
                "name": "Parents",
                "link": "parents",
                "id": "parents"
            }
        ]
    },
    {
        "name": "Classes",
        "pages": [
            {
                "name": "Classrooms",
                "link": "classrooms",
                "id": "classes"
            },
            {
                "name": "Subjects",
                "link": "subjects",
                "id": "subjects"
            }
        ]
    }
]
