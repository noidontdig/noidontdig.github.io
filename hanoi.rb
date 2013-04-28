# Alex Qin's solution to the Brute-force Towers of Hanoi problem

poles = { a: [4, 3, 2, 1], 
          b: [], 
          c: [] 
        }
done =  { a: [],
          b: [], 
          c: [4, 3, 2, 1]
        }  

def move(poles)
  disk = poles.values.select{ |p| !p.empty? }.sample.last
  first = poles.key(poles.values.select{ |p| p.include?(disk) }.flatten)
  second = poles.key(poles.values.select{ |p| p.empty? || p.last > disk }.sample)
  if second
    popped = poles[first].pop
    poles[second].push(popped)
    puts "#{poles[:a]}, #{poles[:b]}, #{poles[:c]}"
  end
  poles
end

while poles != done
  poles = move(poles)
end