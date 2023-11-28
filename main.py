def menu():
    while opcio_usuari not in [1,2] :  
        opcio_usuari = game.ask_for_number("1 -> Fº to Cº\n2 -> Cº to Fº",1 )
    return opcio_usuari
def convert_degrees(num:int) : 
    num_usuari = game.ask_for_number("Introdueix el número a convertir")
    if num == 2 :
        converted = Math.round_with_precision((num_usuari * 9/5) + 32, 2)
    else:
        converted = Math.round_with_precision((num_usuari - 32) * 5/9, 2)
    return num, converted
def show_number(num : int, converted :int):
    if num == 2:
        letter = "C"
    else:
        letter = "F"
    game.show_long_text("La temperatura és: " + str(converted) + " " + letter, DialogLayout.TOP)
while True :
    num, converted = convert_degrees( menu())
    show_number(num, converted)
