# Sectio07-2
# 파이썬 클래스 상세 이해
# 상속, 다중상속

# 예제1
# 상속 기본
# 슈퍼클래스(부모) 및 서브클래시(자식) -> 모든 속성, 메소드 사용 가능

# 라면 -> 속성(종류, 회사, 맛, 면 종류, 라면 이름) : 부모 (공통)
# 다른 부분은 자식 클래스에서 개별 속성 부여

class Car:
    """Parent Class"""
    def __init__(self, tp, color):
        self.type = tp
        self.color = color
    def show(self):
        return 'Car Class "Show Method!"'

class BmwCar(Car):
    """Sub Class"""
    def __init__(self, car_name, tp, color):
        super().__init__(tp, color)
        self.car_name = car_name

    def showModel(self) -> None:
        return "Your Car Name : %s" % self.car_name



class BenzCar(Car):
    """Sub Class"""
    def __init__(self, car_name, tp, color):
        super().__init__(tp, color)
        self.car_name = car_name

    def showModel(self) -> None:
        return "Your Car Name : %s" % self.car_name

    def show(self): # 부모에 있는 메소드에 오버라이딩
        print(super().show())
        return "Car Info : %s %s %s" % (self.car_name, self.type, self.color)


# 일반 사용
model1 = BmwCar('520d', 'sedan', 'red')
print(model1.color) # Super
print(model1.type) # Super
print(model1.car_name) # Sub
print(model1.show()) # Super
print(model1.showModel())
print(model1.__dict__)

# Method Overriding(오버라이딩)
model2 = BenzCar('220d', 'suv', 'black')
print(model2.show()) # Method Overriding

# Parent Method Call
model3 = BenzCar('350s', 'sedan', 'silver')
print(model3.show())

# IN