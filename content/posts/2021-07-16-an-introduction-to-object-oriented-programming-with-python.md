---
title: An Introduction to Object Oriented Programming with Python
description: A brief introduction to the Object Oriented paradigm with Python, where we will see how the language can be used in this context and how it differs from other languages aimed at using this paradigm.
date: 2021-08-07 06:48:04
thumbnailImage: ../../static/assets/img/heranca-python.png
category: blog
tags: 
- python
- OOP
---
___

## Index

```toc
exclude: Index
```
---

## 1 Intro
Python differs greatly from other programming languages that it supports, or that are complete **object-oriented**. This post is a small guide with some language details focused on this paradigm.

### 1.1 Naming conventions in Python
These conventions have a name that we can use to refer to how we are naming certain objects in our program:

**PascalCase** - means that all words start with a capital letter and nothing is used to separate them, as in: `MyClass`, `Class`, `MyObject`, `MyProgramVeryCool`.
This is the convention used for **classes** in Python;

**camelCase** - the only difference between camelCase to PascalCase is the first letter. In camelCase, the first letter will always be lower case and the rest of the words must start with a capital letter. As in: `myFunction`, `SumFunction`, etc...
This convention is **not used** in Python;

**snake_case** - this is the pattern used in Python to define anything that is not a class.
All letters will be lowercase and separated by an underscore, as in: `my_variable`, `cool_function`, `sum`.

**So the patterns used in Python are:**
`snake_case` for anything and `PascalCase` for classes.

---

## 2 Classes
Classes provide a way to organize data and functionality together. Creating a new class creates a new “type” of object, allowing new “instances” of that type to be produced. Each instance of the class can have attributes attached to it to maintain its state. Instances of the class can also have methods (defined by the class) for modifying their state.  

### 2.1 Declare class
```python
class Person:
    pass
```

### 2.2 Abstract Class
A generic class that will not be instantiated, can have concrete and abstract methods.
For that, we must import the module `ABC` *(abstract base class)*.  

```python
from abc import ABC, abstractmethod

class A(ABC):
    @abstractmethod
    def speak(self):
        pass

class B(A):
    def speak(self):
        print(f'B speaking...')

abst = B()
abst.speak()
```

### 2.3 Attributes
Attributes can be defined directly inside the class **(Class Attribute)**
or within the methods created in the class **(Instance Attributes)**.

The difference is that the class attribute can be accessed and changed by the class.
but instances can only access it but cannot change it.

> If a value is assigned to an **attribute of the instance** of the same name that it inherited from the class,
> a new **instance attribute** will be created while the **class attribute** remains unchanged. 

```python
class Cls:
    num = 1

inst = Cls()
print(inst.__dict__)
# {} (object doesn't have any instance attributes yet...)
print(inst.num)
# 1 (and as it doesn't have the "num" attribute it goes to a higher level where it finds the class attribute...)
inst.num = 2
print(inst.__dict__)
# {'num': 2} (after assignment now the object has its own attribute...)
print(inst.num)
# 2 (so it no longer accesses the attribute of the same name of the class...)
print(cls.num)
# 1 (where the attribute still has initial value.)
```

### 2.4 Methods
#### 2.4.1 Instance Methods
Any method created within the class, which when instantiated the object will receive its methods.

**`self`**
All **instance methods** of the class receive `self` as their first attribute,
it refers to the instance that was created from the class.

```python
class Person:
     def eat(self, food):
         print(f'Person is eating {food}.')
```

Class attributes can be declared in the constructor, assigning the values that are passed by the parameter, as well as being created directly in the class and being accessible to all instances created through self.

#### 2.4.2 Class methods
In addition to the **instance methods** that are available for each object instantiated from the class, methods of the class can also be created where they are accessible only to the class itself and not for objects instantiated from the class.
For this behavior, we must first pass a decorator called `@classmethod` and the first parameter becomes the `(cls)` class itself.  

```python
class Person:
    current_year = 2021
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def person_birth(cls, name, birth):
        age = class.current_year - birth
        return cls(name, age)
```

#### 2.4.3 Static methods
They are methods that **do not receive** the context of the instance and the class,
they could even be created outside the class.
You must add a `@staticmethod` decorator before the method signature.  

```python
from random import randint
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @staticmethod
    def generate_id():
        rand = randint(10000, 19999)
        return rand
```

#### 2.4.3 Abstract methods
These are methods that **don't have** a body just the method signature, are usually created within an abstract class to be overridden on instances that inherit from that class.

```python
from abc import ABC, abstractmethod
class Example(ABC):
    @abstractmethod
    def withdraw(self, value):
        pass
```

#### 2.4.4 Magic Methods
They are special methods you can define to add "magic" to classes.
They are always surrounded by two underscores (eg `__init__` or `__lt__`).
To see all magic methods I recommend this [guide](https://rszalski.github.io/magicmethods/),
Here are some of the most used ones:

**`__new__`**
It is the first method to be called when instantiating an object.
It takes the class and then any other arguments and will pass it to `__init__`.

```python
class Person:
     def __new__(cls, *args, **kwargs):
         pass
```

**`__init__`**
The class initializer is called once the class is instantiated.
```python
class Person:
     def __init__(self, name):
         self.name = name
```

**`__call__`**
Allows an instance of a class to be called as a function.
Essentially, this means that `Person()` is the same as `Person.__call__()`.
Note that `__call__` takes a variable number of arguments,
this means that you define `__call__` as you would any other function,
using as many arguments as you like.

```python
class Person:
     def __call__(self, *args, **kwargs):
         print(args)
         print(kwargs)

p = Person()
p(1, 2, 3, name='Gui')
# (1, 2, 3)
# {'name': 'gui'}
```  

**`__setattr__`**
It is an **encapsulation** solution. It allows you to define the behavior for assigning to an attribute,
regardless of the existence or not of this attribute,
which means you can define custom rules for any changes in attribute values.

```python
class Pessoa:
    def __init__(self, name):
        self.name = name
        
    def __setattr__(self, key, value):
        if key != 'name':
            self.__dict__[key] = value
```

### 2.5 Metaclasses
In python, everything is an object, including classes. Metaclasses are like "classes" that create classes.
`type` is a metaclass too.

```python
# type(name = class name, bases = inherited classes, namespace = attributes and methods)
M = type('metaclass', (), {})

class Meta(type):
      def __new__(mcs, name, bases, namespace):
          if name == 'A':
              return type.__new__(mcs, name, bases, namespace)

          if 'attr_cls' in namespace:
              del namespace['attr_cls']

          return type.__new__(mcs, name, bases, namespace)
```

### 2.6 Enum (Python 3.4)
Enum is a python class for creating **enumerations**,
which are a set of symbolic names (members)
bound to constant and unique values. The members of an enumeration
may be compared to these symbolic names,
and the enumeration itself can be iterated.

```python
from enum import enum

Class directions (Enum):
      right = 0
      left = 1
      up = 2
      down = 3

def move(direction):
      if not isinstance(direction, Directions):
          raise ValueError('Cannot move in this direction')

      return f'Moving {direction.name} to position {direction.value}'
```

---

## 3 Polymorphism
In python, the **only polymorphism the language supports** is overlaid, which is the principle that allows classes to be derived from the same superclass and have the same methods (of the same signature) but different behaviors.

> Same signature **=** Same quantity and type of parameters.
```python
from abc import ABC, abstractmethod

class A(ABC):
    @abstractmethod
    def speak(self, msg):
        pass

class B(A):
    def speak(self, msg):
        print(f'B is speaking {msg}')

class C(A):
    def speak(self, msg):
        print(f'C is speaking {msg}')

b = B()
c = C()
b.speak('about skating')
# B is speaking about skating
c.speak('about soccer')
# C is speaking about soccer
```

---

## 4 Encapsulation
Encapsulation is one of the pillars of object orientation. Serves to protect class data.
Encapsulating an application's data means preventing them from being accessed improperly.
For this, a structure is created where modifiers such as `public, protected, private` are used to restrict access to this data.
And methods that can be used by any other class, without causing inconsistencies in development are commonly called **getters and setters**.

### 4.1 Modifiers

In python **we don't have modifiers** to restrict class data access.
Therefore, when naming attributes and methods, a PEP8 **convention** follows:
```properties
name    = public
_name   = protected
__name  = private
```

In practice the attributes or methods can still be accessed and modified,
what changes are that when created with `__` python does not let the value be reassigned
for this variable, it ends up creating another one with the same name in the instance: `obj.__nome`.  
And to access the value of the original variable you must put the name of the class before it: `obj._Classe__nome`.

```python
class Data:
    def __init__(self):
        self.publics = {}
        self._protected = {}
        self.__private = {}

    # getter to get value out of class/object
    @property
    def protected(self):
        return self._protected

    # setter to set a value outside class/object
    @protected.setter
    def protected(self, value):
        self._protected = value
```

### 4.2 Getters & Setters
These methods are called as soon as an object is instantiated from the class, they serve as a **filter**.
The `getter` method gets a value for the instance attribute.
And it must contain the `@property` decorator before its signature.
The `setter` method sets a value for the attribute.
It must contain a decorator with the same name as the attribute followed by a setter, `@name.setter`.  

```python
class Product:
    def __init__(self, name):
        self.name = name

    # getter
    @property
    def name(self):
        return self._name

    # Regulator
    @name.setter
    def name(self, name):
        self._name = name.title()

```

### 4.3 Type Hints (Python 3.5)
Python has **dynamic typing**, where types are checked during **execution**.
And also **strong typing**, all operations between different types must be explicitly defined
and undefined operations between types will result in an error.
For this, the use of **type hints** can be of great help to programmers with a background
in some statically typed language like Java, Haskell, and Go, which has to
develop something bigger than a simple Python script.

**Some advantages of its use:**
- Serve as a form of documentation;
- Optimizations at compile time;
- Security when analyzing the program;
- Code-complete better;
- It's easier to find in a large codebase.  

```python
from typing import Union

# Defining variable types
x: int = 10
y: float = 10.5
z: bool = False

# Defining types of arguments and return of a function
def greeting(name: str) -> str:
    return 'Hello ' + name

# Defining return with more than one type with Union of the typing module
def fn(p1: float, p2: int) -> Union[int, float]:
    return p1 * p2
```

---
## 5 Relations between classes

- Association (Use another class)
- Aggregation (Has another class)
- Composition (Owns another class)
- Inheritance (Inherits from another class)

### 5.1 Association
It describes a link that occurs between classes.
The most common way to implement association is to have one object as an attribute of another, in this example below:

```python
class Writer:
    def __init__(self, name):
        self.__name = name
        self.__tool = None

    @property
    def name(self):
        return self.__name

    @property
    def tool(self):
        return self.__tool

    @ferramenta.setter
    def tool(self, tool):
        self.__tool = tool
    

class Pen:
    def __init__(self, tag):
        self.__brand = brand

    @property
    def tag(self):
        return self.__brand

    def write(self):
        print('Pen is writing...')
        
    
writer = Writer('John')
pen = Pen('Bic')

writer.tool = pen
writer.tool.write()
```

### 5.2 Aggregation
It is a special type of association where one tries to demonstrate that the information of an object (called object-todo)
need to be supplemented by information contained in one or more objects of another class (called part-objects)
known as **whole/part**. But these parts can exist separately.

In this aggregation example, the classes can exist separately but they work better when the cart has products.  

```python
class Product:
    def __init__(self, name, value):
        self.name = name
        self.value = value

class ShoppingCart:
    def __init__(self, ):
        self.products = []

    def insert_product(self, product):
        self.products.append(product)

    def product_list(self):
        for product in self.products:
            print(f'{product.name}: ${product.value}')

    def sum_total(self):
        total = 0
        for product in self.products:
            total += product.value
        return f'${total}'
    
    
cart = ShoppingCart()
p1 = Product('Hat', 50)
p2 = Product('underwear', 20)
p3 = Product('shoes', 150)
cart.insert_product(p1)
cart.insert_product(p2)
cart.insert_product(p3)
cart.list_products()
# Bone: USD 50
# underwear: $20
# tennis shoes: USD 150
print(cart.sum_total())
# USD 220
```

### 5.3 Composition
A composition also tries to represent a **whole/part** relationship.
However, in composition, the object-whole is responsible for creating and destroying its parts.
In a composition, the same part-object cannot be associated with more than one whole-object.

In the example below, the customer object has an address object in its address book, in this case when the customer object which is the all-object is deleted, the address object will also be deleted.  

```python
class Customer:
    def __init__(self, name):
        self.__name = name
        self.__addresses = []

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, name):
        self.__name = name

    def insert_address(self, city):
        self.__addresses.append(Address(city))

    def address_list(self):
        for address in self.__addresses:
            print(address.city)

class Address:
    def __init__(self, city):
        self.__city = city

    @property
    def city(self):
        return self.__city

    @cidade.setter
    def city(self, city):
        self.__city = city

customer1 = Customer('John')
customer1.insert_address('Dublin')
print(client1.name)
# John
customer1.list_addresses()
# Dublin
from client1
```

### 5.4 Inheritance
An object can have methods and attributes of another class by inheritance, it means that the class has all features of the inherited class, besides being able to have your own.

One of the great advantages of using inheritance is code reuse.
This reuse can be triggered when it is identified that the attribute or method of a class will be the same for the others.
To inherit from a class, the name of the class is passed as a parameter.
```python
# superclass
class Person:
    def __init__(self, name):
        self.__name = name
    
    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, name):
        self.__name = name

    def talk(self):
        print(f'{self.name} is speaking...')


# subclasses
class Customer(Person):
    def buy(self):
        print(f'{self.name} is buying...')


class Student(Person):
    def study(self):
        print(f'{self.name} is studying...')
```

#### 5.4.1 Overriding methods
Inherited methods can be overridden within the class.
To use the logic of the overridden method and add more lines of code it is necessary to pass to the `super()` method which refers to the class being inherited, to reference a specific class within the inheritance chain it is necessary to pass the name of the class with the method and `self` as a parameter.  

```python
class ClienteVip(Customer):
    def __init__(self, first name, last name):
        super().__init__(name)
        self.lastname = lastname

    def talk(self):
        Person.talk(self)   # in this case refers to the Person class specifically.
        super().falar()     # in this case it refers to the inherited class (Client).
        print(f'{self.name} {self.lastname} is vip...')
```  

#### 5.4.2 Multiple Inheritance
Multiple inheritances, in object orientation, is the concept of inheriting from two or more classes.

```python
class A:
    def talk(self):
        print('Talking... I'm in A.')

class B(A):
    def talk(self):
        print('Speaking... I'm in B.')

class C(B, A):
    pass

c = C()
c.speak()
# Speaking... I'm in B.
```

#### 5.4.3 Mixin
Especially in the context of Python, a **mixin** is a parent class that provides functionality to subclasses, **but is not intended to be instantiated**.
```python
class LogMixin:
    """
    creates a log file with info and errors.
    """
    @staticmethod
    def write(msg):
        with open('log.log', 'a+') as f:
            f.write(msg)
            f.write('\n')

    def log_info(self, msg):
        """
        write an info message to file
        :param msg:
        :return:
        """
        self.write(f'INFO: {msg}')


    def log_error(self, msg):
        """
        write an error message to file
        :param msg:
        :return:
        """
        self.write(f'ERROR: {msg}')
```

---

## 6 References
- https://www.udemy.com/course/python-3-do-zero-ao-avancado/
- https://docs.python.org/3/tutorial/
- https://rszalski.github.io/magicmethods/
- https://docs.python.org/3/library/typing.html
- https://diogommartins.medium.com/python-3-e-type-hints-40e80a9e8214

---
## 7 Conclusion
Because it is a dynamically typed language and is not completely object-oriented, using this paradigm in Python, as we can see, has many differences compared to languages like Java for example. However, I hope this post has helped you to start using this paradigm and take advantage of it.

What did you think of this post? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉