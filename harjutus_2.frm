VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} harjutus_2 
   Caption         =   "Harjutus 2"
   ClientHeight    =   5175
   ClientLeft      =   45
   ClientTop       =   375
   ClientWidth     =   6165
   OleObjectBlob   =   "harjutus_2.frx":0000
   StartUpPosition =   1  'CenterOwner
End
Attribute VB_Name = "harjutus_2"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub tul_Click()
Dim x As Double
x = Me.x.Value
Dim tulemus As Integer
tulemus = (2 * (x + 3) * ((2 * x) - (0.5)))
Me.val.Value = tulemus
End Sub
