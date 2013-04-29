# Alex Qin's solution to the Brute-force Towers of Hanoi problem

rods =  { a: [4, 3, 2, 1], 
          b: [], 
          c: [] 
        }
done =  { a: [],
          b: [], 
          c: [4, 3, 2, 1]
        }  

def move(rods)
  disk = rods.values.select{ |r| !r.empty? }.sample.last
  first = rods.key(rods.values.select{ |r| r.include?(disk) }.flatten)
  second = rods.key(rods.values.select{ |r| r.empty? || disk < r.last }.sample)
  if second
    popped = rods[first].pop
    rods[second].push(popped)
    puts "#{rods[:a]}, #{rods[:b]}, #{rods[:c]}"
  end
  rods
end

while rods != done
  rods = move(rods)
end