from django.test import TestCase
from .dbAPI import add_student, update_student
from django.contrib.auth.models import User
import datetime

# Create your tests here.

class TestStudentProfiledbAPI(TestCase):
    def test_add_student(self):
        testuser = "testUser"
        testemail = "testuser@example.com"
        testPassword = 'testtest02'
        testkwargs = {
            "first_name" : "testname",
            "last_name" : "testsurname",
            "bio" : "testbio",
            "birth_date" : datetime.date(2019, 11, 25),
            "location" : "testlocation"
        }
        add_student(testuser, testemail, testPassword, **testkwargs)
        test = User.objects.get(username=testuser)
        self.assertEqual(test.username, testuser)
        self.assertEqual(test.email, testemail)
        self.assertNotEqual(test.password, testPassword)
        self.assertEqual(test.first_name, "testname")
        self.assertEqual(test.last_name, "testsurname")
        self.assertEqual(test.studentprofile.bio, "testbio")
        self.assertEqual(test.studentprofile.birth_date, datetime.date(2019, 11, 25))
        self.assertEqual(test.studentprofile.location, "testlocation")

    def test_update_student(self):
        testuser = "testUser2"
        testemail = "testuser@example.com"
        testPassword = 'testtest02'
        testkwargs = {
            "first_name": "testname",
            "last_name": "testsurname",
            "bio": "testbio",
            "birth_date": datetime.date(2019, 11, 25),
            "location": "testlocation"
        }
        add_student(testuser, testemail, testPassword, **testkwargs)
        test = User.objects.get(username=testuser)
        test_date = datetime.date(1999, 9, 9)
        update_student(test.id, **{"first_name": "Janek", "birth_date": test_date})
        test = User.objects.get(username=testuser)
        self.assertEqual(test.first_name, "Janek")
        self.assertEqual(test.studentprofile.birth_date, test_date)

