# Проєктування бази даних

## Модель бізнес об'єктів

@startuml

entity User #orange
entity User.email #white
entity User.nickname #white
entity User.password #white

User.email --* User
User.nickname --* User
User.password --* User

entity Member #orange

entity ProjectMember #orange

entity Role #orange
entity Role.id #white
entity Role.name #white

Role.id --* Role
Role.name --* Role

entity Permission #orange
entity Permission.name #white
entity Permission.id #white

Permission.name --* Permission
Permission.id --* Permission

entity Grant #orange

entity Project #orange
entity Project.name #white
entity Project.description #white
entity Project.id #white

Project.name --* Project
Project.description --* Project
Project.id --* Project

entity Task #orange
entity Task.id #white
entity Task.name #white
entity Task.description #white
entity Task.isCompleted #white

Task.name --* Task
Task.description --* Task
Task.isCompleted --* Task
Task.id --* Task

Member "0,*" -d- "1,1" User
Member "0,*" -d- "1,1" Role
ProjectMember "0,*" -d-- "1,1" Member
Grant "0,*" -u- "1,1" Role
Grant "0,*" -d- "1,1" Permission
Task "0,*" -d- "1,1" Project
ProjectMember "0,*" -d- "1,1" Project

@enduml

## ER-модель

@startuml

package UserProfile {
entity User {
    id: UUID
    nickname: TEXT
    email: TEXT
    password: TEXT
  }
}

package AccessPolicy {
entity Member {
    id: UUID
}

entity Role {
    id: UUID
    name: TEXT
  }
  
entity Grant {
    id: UUID
  }

entity Permission {
    id: UUID
    name: TEXT
  }
}

package ProjectManagment {
  entity ProjectMember {
    id: UUID
  }
  
  entity Project {
    id: UUID
    name: TEXT
    description: TEXT
  }
  
  entity Task {
    id: UUID
    name: TEXT
    description: TEXT
    isCompleted: BOOLEAN
  }
}

User "1,1" -- "0,*" Member
Permission "1,1" -- "0,*" Grant
Role "1,1" -- "0,*" Grant
Role "1,1" -- "0,*" Member
Member "1,1" - "0,*" ProjectMember
Project "1,1" -- "0,*" ProjectMember
Project "1,1" -- "0,*" Task

@enduml

## Реляційна схема
