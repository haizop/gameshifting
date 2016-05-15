class Panel < ActiveRecord::Base
  belongs_to :console
  belongs_to :user
  has_many :toggles
end
