cmake_minimum_required(VERSION 3.10.2)

project(
  "MOON_PROJECT"
  VERSION 0.1
  DESCRIPTION "CMakeLists 작성법 익히기"
  LANGUAGES CXX)

set(SRC_DIR ${CMAKE_SOURCE_DIR}/src)
set(INCLUDE_DIR ${CMAKE_SOURCE_DIR}/includes)

add_library(libmyclass STATIC ${SRC_DIR}/myClass.cpp)
target_include_directories(libmyclass PUBLIC ${INCLUDE_DIR})


# 실행 파일 빌드
add_executable(main ${SRC_DIR}/main.cpp)

# main 실행 파일에서 myclass 라이브러리 링크
target_link_libraries(main PRIVATE libmyclass)