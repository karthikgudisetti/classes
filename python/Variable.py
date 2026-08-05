# # premetive data types
# name="karthik"
# age=20
# college="parul"
# fee=150000
# status=False
# print("name: ",name,"\n","age: ",age,"\n","college: ",college,"\n","Fees: ",fee,"\nStatus: ",status)

# #non prementive data types
# l=[1,2,3,4]
# print(l)
# n=(1,2,3,4)
# print(n)
# b={1,2,2,2,3,4}
# print(b)
# c={"na":"karthik","a":20}
# print(c)

# # type
# print(type(l),type(n),type(b),type(c))

# operator
a=90
b=30
#arthmetic

# print(a+b)
# print(a-b)
# print(a/b)
# print(a%b)
# print(a*b)
# print(a**3)
# print(a//b)

#assignment

# a+=10
# print(a)
# b-=10
# print(b)
# a*=10
# print(a)
# b/=10
# print(b)
# a%=100
# print(a)

# comparision

# print(a>b)
# print(a<b)
# print(a!=b)
# print(a==b)
# print(a>=b)
# print(a<=b)

# logical 
# print(a>10 and b<20)
# print(a>10 or b<20)
# print(not a)

# bitwise

# print(a&b)
# print(a|b)
# print(a^b)
# print(~a)
# print(a<<2)
# print(a>>1)

# identity Check whether two variables refer to the same object in memory.
# a=[1,2,3]
# b=[1,2,3]
# print(a==b)
# print(a is b)   #it was false beacuse the memory allocation for b was different  so that is the main reason  

# membership checks 
# l=["karthik","dileep","gowri","ramu"]
# k="dileep"
# print(k in l) #it checks wheter it was there in list or not 

# # outputs 
# a=20
# b=30
# print(a) #shows the output on the device
# print(b)
# #space
# print(a,b,sep="->")
# #end
# print(a,b,end=" ")
# print(a,b,end="---->")

# #string format
# c="karthik"
# print(f"hi my self { c} iam {a} year old guy my annual salary was {b}")

#inputs  takes inputs from the users . it always was in string 
# a=input("enter the name of the student:")
# b= input("enter the age of the student:")
# print(f"the name of the student {a} he was {b} years old")

#type conversion it dynammically changes one data type to another
# a=input("enter the name of the student:")
# b= input("enter the age of the student:")

# print(b)
# print(int(b))
# print(float(b))
# print(bool(b))

# split 
# a,b=input("enter the numbers: ").split() #it returns the striings 
# print(a+b)
a, b = map(int, input("enter the numbers: ").split())
print(a+b)










