# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
@startuml 

entity User 
entity User.id #ffffff 
entity User.username #ffffff 
entity User.email #ffffff 
entity User.password #ffffff 
entity User.registration #ffffff
entity User.firstname #ffffff
entity User.lastname #ffffff

entity StaffLogin 

entity Editor #ffffff  

entity Search
entity SRCH.date
entity SRCH.id
entity SRCH.keyword
entity SRCH.format

entity BranchCreate #ffffff
entity BranchCreate.branch_id #ffffff
entity BranchCreate.editor_id #ffffff

entity Administrator #ffffff
entity ADM.editor_add
entity ADM.editor_delete
entity ADM.upload
entity ADM.delete
entity ADM.annotation_chng
entity ADM.view_history
entity ADM.view_branch

entity Request

entity File 
entity File.name #ffffff 
entity File.format #ffffff 
entity File.id #ffffff 
entity File.description #ffffff 
entity File.file_csv #ffffff 
entity File.uploadDate #ffffff 
entity File.hasGraph #ffffff

SRCH.date -u-* Search 
SRCH.id -u-* Search 
SRCH.keyword -u-* Search 
SRCH.format -u-* Search 

User.username -d-* User 
User.id -d-* User 
User.email -d-* User 
User.password -d-* User 
User.registration -d-* User
User.firstname -d-* User
User.lastname -d-* User

ADM.editor_add  -r-* Administrator
ADM.editor_delete -u-* Administrator
ADM.upload -l-* Administrator
ADM.delete -d-* Administrator
ADM.annotation_chng -u-* Administrator
ADM.view_history -u-* Administrator
ADM.view_branch -d-* Administrator

BranchCreate "0,*" -u- "1,1" Editor
BranchCreate.branch_id -l-* BranchCreate
BranchCreate.editor_id -r-* BranchCreate

User "1,1" -d- "0,1" StaffLogin 

StaffLogin "1,1" -d-  "0,*" Editor
StaffLogin "1,1" -l- "0,*" Administrator

User "1,1" ---r--- "0,*" Request 
Request "1,1" -r-- "0,*" Search
Search "1,1" -r-- "0,*" File
File.name -d-* File 
File.id -d-* File 
File.description -d-* File 
File.file_csv -d-* File 
File.uploadDate -d-* File 
File.hasGraph -l-* File
File.format -l-* File


@enduml
- ER-модель
@startuml 

entity USER <<ENTITY>>{
user_id:INT
user_username:TEXT
user_email:TEXT
user_password:TEXT
user_registration:BOOL
user_firstname:TEXT
user_lastname:TEXT
}

entity StaffLogin <<ENTITY>>{

}

entity Administrator <<ENTITY>>{
ADM_delete:OBJ
ADM_view_branch:OBJ
ADM_upload:OBJ
ADM_editor_delete:OBJ
ADM_view_history:OBJ
ADM_annotation_chng:TEXT
ADM_editor_add:INT
}

entity Editor <<ENTITY>>{
}

entity BRANCH <<ENTITY>> {
branch_editor_id:INT
branch_branch_id:INT
}

entity REQUEST <<ENTITY>>{
}

entity SEARCH <<ENTITY>>{
SRCH_date:DATE
SRCH_id:INT
SRCH_keyword:TEXT
SRCH_format:TEXT
}

entity FILE <<ENTITY>> {
file_name:TEXT
file_id:INT
file_description:TEXT
file_uploadDate:DATE
file_format:TEXT
}

USER"1,1" -- "0,*"REQUEST
REQUEST"1,1" -- "0,*"SEARCH
SEARCH"1,1" -- "0,*"FILE
USER "1,1"--"0,1" StaffLogin
StaffLogin"1,1" -- "0,*"Administrator
Editor"0,*" -- "1,1"StaffLogin
BRANCH"0,*" -- "1,1"Editor
  
@enduml
- реляційна схема
![SQL](https://github.com/ELSheadali/IO-16_open-data-management-system/assets/86313572/fb47c209-3389-4c61-b970-c9175cdd5599)

